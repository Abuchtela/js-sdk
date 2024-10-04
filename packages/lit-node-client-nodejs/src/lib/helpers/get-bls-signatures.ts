import { LogLevel, LogManager } from '@lit-protocol/logger';
import { bootstrapLogger, log } from '@lit-protocol/misc';
import { BlsResponseData, BlsSignatureShare } from '@lit-protocol/types';

const LOG_CATEGORY: string = "lit-node-client-helpers";
const logger = bootstrapLogger(LOG_CATEGORY, LogManager.Instance.level ?? LogLevel.OFF);


/**
 * Get the BLS signatures from the response data.
 * @param responseData - The response data from BLS signature scheme.
 * @returns An array of BLS signatures.
 * @throws Error if no data is provided.
 */
export function getBlsSignatures(
  responseData: BlsResponseData[]
): BlsSignatureShare[] {
  if (!responseData) {
    throw new Error('[getBlsSignatures] No data provided');
  }

  const signatureShares = responseData.map((s) => ({
    ProofOfPossession: s.signatureShare.ProofOfPossession,
  }));
  log(logger, `[getBlsSignatures] signatureShares:`, signatureShares);

  if (!signatureShares || signatureShares.length <= 0) {
    throw new Error('[getBlsSignatures] No signature shares provided');
  }

  return signatureShares;

  // const signedDataList = responseData.map((s) => s.dataSigned);
  // log(`[getBlsSignatures] signedDataList:`, signedDataList);

  // return signedDataList;
}
