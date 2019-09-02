import { Observable } from 'rxjs';

export interface Hwcrypto {
  getCertificate(options: SigningOptions): Observable<Certificate>;

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
  type: string;
  value: Uint8Array;
  hex: string;
}

export interface Signature {
  value: Uint8Array;
  hex?: string;
}
