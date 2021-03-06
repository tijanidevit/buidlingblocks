import { Injectable } from '@angular/core';

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class IpfsService {

  public ipfs: any;

  constructor() {
    // ...
  }

  public bootstrap(): void {
    this.ipfs = new window.IpfsHttpClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
    //console.log('this.ipfs =>', this.ipfs);
  }

  public cat(IpfsHash: string) {
    // Init IPFS
    this.bootstrap();
    // Attempt read stream
    try {
      const stream = this.ipfs.cat(IpfsHash);
      //console.log('ipfs.get', stream);
      return stream;
    } catch (err) {
      console.log('Error reading IPFS stream', err)
      return err;
    }
  }

  public readFileAsStream(IpfsHash: string) {
    // Init IPFS
    this.bootstrap();
    // Attempt read stream
    try {
      const stream = this.ipfs.getReadableStream(IpfsHash);
      //console.log('ipfs.getReadableStream', stream);
      return stream;
    } catch (err) {
      console.log('Error reading IPFS stream', err)
      return err;
    }
    

  }
}
