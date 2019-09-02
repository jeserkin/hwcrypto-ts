export interface Hwcrypto {
  getCertificate(options: SigningOptions): Promise<Certificate>;

  sign(certificate: Certificate, hash: SignatureHash, options?: SigningOptions): Promise<Signature>;
}

export interface SigningOptions {
  lang?: string;
  filter?: string;
}

export interface Certificate {
  encoded: Uint8Array;
  hex?: string;
}

export interface SignatureHash {
  type: SignatureHashType | string;
  value: Uint8Array;
  hex: string;
}

export interface Signature {
  value: Uint8Array;
  hex?: string;
}

export enum SignatureHashType {
  SHA1 = 'SHA-1',
  SHA224 = 'SHA-224',
  SHA256 = 'SHA-256',
  SHA384 = 'SHA-384',
  SHA512 = 'SHA-512',
}
