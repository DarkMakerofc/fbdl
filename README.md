<p align="center">
<img src="https://telegra.ph/file/acaf629fabb423c0c166f.png" width="100" height="100"/>
</p>
<h2 align="center"> FACEBOOK DOWNLOADER </h2>
<h6 align="center"> A Simple Facebook Video Downloader </h6>
<br> 

#### ⬇️ Install
```
npm install mrnima-fbdl
```

#### 📖 Example 
```
const { facebook } = require('mrnima-fbdl');

async function main() {
    const fbUrl = "https://www.facebook.com/shaabromusic/videos/981397083531887";
    const result = await facebook(fbUrl);
    console.log(result);
}

main();

```

#### ✅ Result 
```
{
  creator: 'MR NIMA',
  status: true,
  result: {
    thumbnail: 'https://scontent-mrs2-1.xx.fbcdn.net/v/t15.5256-10/436317288_467854115732976_1926718699448321760_n.jpg?stp=dst-jpg_s640x640&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ifggXW-FHaYQ7kNvgFjjX5O&_nc_ht=scontent-mrs2-1.xx&edm=AGo2L-IEAAAA&oh=00_AYAvkeY7TUUnFqo_EF4O5XcRTjpyGRu5W5Jklh-rpUxv7A&oe=666C5F31',
    duration: '0:46',
    links: {
      HD: 'https://video-mrs2-2.xx.fbcdn.net/o1/v/t2/f2/m69/An9TF19CTL9-8RiM7mRe-xBS9LT3BiSOH9s4s9nSGFsWBvelBUf-jDLKJGbOCDOQAb3h1koxJRCor17lE5Rf_vH1.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=video-mrs2-2.xx.fbcdn.net&_nc_cat=102&strext=1&vs=30d1d82caa02a3aa&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HQzB5cnhvVWpjSFRaSTBCQUVURGdVMzJaN0JXYm1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dEYXBxeHJqaGJRUHN0QUNBQWFUV1J3Y3lNTV9ickZxQUFBRhUCAsgBAEsHiBJwcm9ncmVzc2l2ZV9yZWNpcGUBMQ1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViACBtZWFzdXJlX29yaWdpbmFsX3Jlc29sdXRpb25fc3NpbQAoY29tcHV0ZV9zc2ltX29ubHlfYXRfb3JpZ2luYWxfcmVzb2x1dGlvbgAddXNlX2xhbmN6b3NfZm9yX3ZxbV91cHNjYWxpbmcAEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcjBdAAAAAAAAAABERAAAAJq6LhPyWkogBFQIoAkMzGAt2dHNfcHJldmlldxwXQEcZmZmZmZoYGWRhc2hfaDI2NC1iYXNpYy1nZW4yXzcyMHASABgYdmlkZW9zLnZ0cy5jYWxsYmFjay5wcm9kOBJWSURFT19WSUVXX1JFUVVFU1QbCogVb2VtX3RhcmdldF9lbmNvZGVfdGFnBm9lcF9oZBNvZW1fcmVxdWVzdF90aW1lX21zATAMb2VtX2NmZ19ydWxlB3VubXV0ZWQTb2VtX3JvaV9yZWFjaF9jb3VudAU4MjY0NRFvZW1faXNfZXhwZXJpbWVudAAMb2VtX3ZpZGVvX2lkDzk4MTM5NzA4MzUzMTg4NxJvZW1fdmlkZW9fYXNzZXRfaWQQMTE1MTAwNzcwOTU1OTYzMxVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPMjk5Mzc5NDgzMjQ3MzE5HG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQQMTE4OTk4NDcyODY3OTg4Nw52dHNfcmVxdWVzdF9pZAAlAhwAJcQBGweIAXMENTEwNgJjZAoyMDI0LTA2LTA0A3JjYgU4MjYwMANhcHAURmFjZWJvb2sgZm9yIEFuZHJvaWQCY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zCTQ2LjE2MTM2MQJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=9-4&oh=00_AYDbMbSJaeiqZEz_1oN5k7ijPm2KqbiNU_wBK-DwJXPBdw&oe=66686DF4&_nc_sid=1d576d&_nc_rid=681704398099753&_nc_store_type=1&dl=1',
      SD: 'https://video-mrs2-1.xx.fbcdn.net/v/t42.1790-2/447898760_1691534961607389_3207386040058615770_n.mp4?_nc_cat=109&ccb=1-7&_nc_sid=55d0d3&efg=eyJ2ZW5jb2RlX3RhZyI6InN2ZV9zZCIsInZpZGVvX2lkIjo5ODEzOTcwODM1MzE4ODd9&_nc_ohc=dIWROvYIYkwQ7kNvgF_8srw&_nc_ht=video-mrs2-1.xx&edm=AGo2L-IEAAAA&oh=00_AYAz3Slqyt7dxpqJ57dEsJrm6bgdy8VXa8xV1fo3c4cxxQ&oe=666C5D38&dl=1'
    }
  }
}
```
<br><br>


#### 👨‍💻 Author : [Mr Nima](https://github.com/Darkmakerofc)