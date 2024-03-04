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
    const fbUrl = "https://www.facebook.com/share/v/Dk3JH9hRY7MU827F/?mibextid=jmPrMh";
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
    thumbnail: 'https://scontent-fra5-1.xx.fbcdn.net/v/t15.5256-10/428720875_1097577967957274_1915043822291160297_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=dd673f&_nc_ohc=cXNTLva8QbUAX9U6vNF&_nc_ht=scontent-fra5-1.xx&oh=00_AfB2I4uQFSjmwtJufiFb0dNsQ5yue4eV2mfOLNqy7GkajQ&oe=65E78CC0',
    duration: '0:18',
    links: {
      HD: 'https://scontent-fra5-1.xx.fbcdn.net/o1/v/t2/f1/m69/GG5xoBlCeL1HLiQGAEIsSARfyLAWbmdjAAAF.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=scontent-fra5-1.xx.fbcdn.net&_nc_cat=100&strext=1&vs=6a8ba63a6a6b1086&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HRzV4b0JsQ2VMMUhMaVFHQUVJc1NBUmZ5TEFXYm1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dHNXFuaG5hYTZWOXlOMENBSGdyYlJZNlM3QnNidjRHQUFBRhUCAsgBAEsHiBJwcm9ncmVzc2l2ZV9yZWNpcGUBMQ1zdWJzYW1wbGVfZnBzABB2bWFmX2VuYWJsZV9uc3ViACBtZWFzdXJlX29yaWdpbmFsX3Jlc29sdXRpb25fc3NpbQAoY29tcHV0ZV9zc2ltX29ubHlfYXRfb3JpZ2luYWxfcmVzb2x1dGlvbgAddXNlX2xhbmN6b3NfZm9yX3ZxbV91cHNjYWxpbmcAEWRpc2FibGVfcG9zdF9wdnFzABUAJQAcjBdAAAAAAAAAABERAAAAJvqqhu%2FPwsUBFQIoAkMzGAt2dHNfcHJldmlldxwXQDK7peNT988YIWRhc2hfZ2VuMmh3YmFzaWNfaHEyX2ZyYWdfMl92aWRlbxIAGBh2aWRlb3MudnRzLmNhbGxiYWNrLnByb2Q4ElZJREVPX1ZJRVdfUkVRVUVTVBsKiBVvZW1fdGFyZ2V0X2VuY29kZV90YWcGb2VwX2hkE29lbV9yZXF1ZXN0X3RpbWVfbXMBMAxvZW1fY2ZnX3J1bGUHdW5tdXRlZBNvZW1fcm9pX3JlYWNoX2NvdW50BDUyNTkRb2VtX2lzX2V4cGVyaW1lbnQADG9lbV92aWRlb19pZA84ODcyMzUwMzY1MzQ0NzQSb2VtX3ZpZGVvX2Fzc2V0X2lkDzM1MzUyODMzMDk5MDA3MhVvZW1fdmlkZW9fcmVzb3VyY2VfaWQPNDM0MzUyMTcyMzU0MjM3HG9lbV9zb3VyY2VfdmlkZW9fZW5jb2RpbmdfaWQPNzcyOTcwOTk0MzkwNTA0DnZ0c19yZXF1ZXN0X2lkACUCHAAlxAEbB4gBcwQxMTQwAmNkCjIwMjQtMDItMjcDcmNiBDUyMDADYXBwDUZhY2Vib29rIExpdGUCY3QZQ09OVEFJTkVEX1BPU1RfQVRUQUNITUVOVBNvcmlnaW5hbF9kdXJhdGlvbl9zCTE4LjgyOTk3NwJ0cxVwcm9ncmVzc2l2ZV9lbmNvZGluZ3MA&ccb=9-4&oh=00_AfCk1tRcz0W6jagCy7-Zns10D5-UJpwnPuuRNqTM5a4A1Q&oe=65E4CA33&_nc_sid=1d576d&_nc_rid=095084686025399&_nc_store_type=1&dl=1',
      SD: 'https://scontent-fra3-2.xx.fbcdn.net/v/t42.1790-2/430123301_935274988316373_8584098772688619003_n.mp4?_nc_cat=111&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjc1NiwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIn0%3D&_nc_ohc=JD7AgjwZPawAX_3qRF-&rl=756&vabr=420&_nc_ht=scontent-fra3-2.xx&oh=00_AfCDj_sd3BLjrXUNDivlcLbHnqVR0FbGwB_u4i9fNiV65w&oe=65E8C4EC&dl=1'
    }
  }
}
```
<br><br>


#### 👨‍💻 Author : [Mr Nima](https://github.com/Darkmakerofc)