import {
  AuthMethod,
  BaseProviderOptions,
  DiscordAuthenticateOptions,
  OAuthProviderOptions,
} from '@lit-protocol/types';
import { AuthMethodType } from '@lit-protocol/constants';
import { BaseProvider } from './BaseProvider';
import {
  prepareLoginUrl,
  parseLoginParams,
  getStateParam,
  decode,
  clearParamsFromURL,
} from '../utils';
import { ethers } from 'ethers';
import { sha256 } from 'ethers/lib/utils';

export default class DiscordProvider extends BaseProvider {
  /**
   * The redirect URI that Lit's login server should send the user back to
   */
  public redirectUri: string;
  /**
   * OAuth client ID. Defaults to one used by Lit
   */
  private clientId?: string;

  /**
   * Discord client ID
   */
  #clientId: string = '105287423965869266';
  /**
   * Discord access token
   */
  #accessToken: string | undefined;

  constructor(options: BaseProviderOptions & OAuthProviderOptions) {
    super(options);
    this.redirectUri = options.redirectUri || window.location.origin;
    this.clientId = options.clientId || '1052874239658692668';
  }

  /**
   * Redirect user to the Lit's Discord login page
   *
   * @returns {Promise<void>} - Redirects user to Lit login page
   */
  public async signIn(): Promise<void> {
    // Get login url
    const loginUrl = await prepareLoginUrl('discord', this.redirectUri);
    // Redirect to login url
    window.location.assign(loginUrl);
  }

  public getAuthMethodStorageUID(accessToken: string): string {
    // shortern authMethodId to 16 characters
    const authMethodId = sha256(Buffer.from(accessToken)).slice(0, 16);

    return `lit-discord-token-${authMethodId}`;
  }

  /**
   * Validate the URL parameters returned from Lit's login server and return the authentication data
   *
   * @returns {Promise<AuthMethod>} - Auth method object that contains OAuth token
   */
  public async authenticate(
    options?: DiscordAuthenticateOptions
  ): Promise<AuthMethod> {
    const _options = {
      cache: true,
      ...options,
    };

    // Check if it exists in cache
    // let storageItem =
    //   this.storageProvider.getExpirableItem('lit-discord-token');

    // if (storageItem) {
    //   clearParamsFromURL();
    //   return JSON.parse(storageItem);
    // }

    // Check if current url matches redirect uri
    if (!window.location.href.startsWith(this.redirectUri)) {
      throw new Error(
        `Current url "${window.location.href}" does not match provided redirect uri "${this.redirectUri}"`
      );
    }

    // Check url for params
    const { provider, accessToken, state, error } = parseLoginParams(
      window.location.search
    );

    // Check if there's an error
    if (error) {
      throw new Error(error);
    }

    // Check if provider is Discord
    if (!provider || provider !== 'discord') {
      throw new Error(
        `OAuth provider "${provider}" passed in redirect callback URL does not match "discord". This usually means that you have not signed in with Discord yet. If you have signed in with Discord and was redirected back to your app, your URL should look something like this: "${this.redirectUri}?provider=discord&access_token=abc123&state=xyz123"`
      );
    }

    // Check if state param matches
    if (!state || decode(decodeURIComponent(state)) !== getStateParam()) {
      clearParamsFromURL();

      throw new Error(
        `Invalid state parameter "${state}" passed in redirect callback URL`
      );
    }

    // Clear params from url
    clearParamsFromURL();

    // Check if access token is present in url
    if (!accessToken) {
      throw new Error(
        `Missing access token in redirect callback URL for Discord OAuth"`
      );
    }

    this.#accessToken = accessToken;

    const authMethod = {
      authMethodType: AuthMethodType.Discord,
      accessToken: accessToken,
    };

    if (_options?.cache) {
      const storageUID = this.getAuthMethodStorageUID(accessToken);

      this.storageProvider.setExpirableItem(
        storageUID,
        JSON.stringify(authMethod),
        _options.expirationLength ?? 24,
        _options.expirationUnit ?? 'hours'
      );
    }

    return authMethod;
  }

  /**
   * Get auth method id that can be used to look up and interact with
   * PKPs associated with the given auth method
   *
   * @param {AuthMethod} authMethod - Auth method object
   *
   * @returns {Promise<string>} - Auth method id
   */
  public async getAuthMethodId(authMethod: AuthMethod): Promise<string> {
    const userId = await this.#fetchDiscordUser(authMethod.accessToken);
    const authMethodId = ethers.utils.keccak256(
      ethers.utils.toUtf8Bytes(`${userId}:${this.clientId}`)
    );
    return authMethodId;
  }

  /**
   * Fetch Discord user ID
   *
   * @param {string} accessToken - Discord access token
   *
   * @returns {Promise<string>} - Discord user ID
   */
  async #fetchDiscordUser(accessToken: string): Promise<string> {
    const meResponse = await fetch('https://discord.com/api/users/@me', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });
    if (meResponse.ok) {
      const user = await meResponse.json();
      return user.id;
    } else {
      throw new Error('Unable to verify Discord account');
    }
  }
}
