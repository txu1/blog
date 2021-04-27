/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "405818bfc0b7ba79f6b72fb21f36ff9d"
  },
  {
    "url": "app.png",
    "revision": "8d6db0c32769272e9b6d23e672a190d8"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "205134aa846f4ada99a3419051f758bd"
  },
  {
    "url": "assets/css/0.styles.3f022aa2.css",
    "revision": "d1af897133637856c84956473c2091ea"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8e59817e.js",
    "revision": "1253edf0f064d890a76d4a733dc215ff"
  },
  {
    "url": "assets/js/11.34cd2f44.js",
    "revision": "9a029a10cd9b358b82bb1f58626dada5"
  },
  {
    "url": "assets/js/12.445d88fd.js",
    "revision": "5140a8390ec11922cda0b5ace39294a9"
  },
  {
    "url": "assets/js/13.e6460b96.js",
    "revision": "7bb5432ab49f21d6c18a397fff0fab06"
  },
  {
    "url": "assets/js/14.d0ee0fcf.js",
    "revision": "c508ad4e816b12fe9286c8f17d8991d7"
  },
  {
    "url": "assets/js/15.e91e78ed.js",
    "revision": "20f41cb749c3db2633aaaad636bc3fa6"
  },
  {
    "url": "assets/js/16.8310de97.js",
    "revision": "2698b41868c9205c37623a4146ff220e"
  },
  {
    "url": "assets/js/17.6ca97902.js",
    "revision": "48b8e0a221fe6781eff80573e2623d6d"
  },
  {
    "url": "assets/js/18.a82e534b.js",
    "revision": "e396a50a6c815dd41a79c59473524a9d"
  },
  {
    "url": "assets/js/19.e3a914ee.js",
    "revision": "dbe320594c4f28fd4e3426f669c2abdd"
  },
  {
    "url": "assets/js/2.b6c629b5.js",
    "revision": "3dd0bcec06febd341fe283b0e7fbcf22"
  },
  {
    "url": "assets/js/20.6db77b80.js",
    "revision": "c76da5f014b5775a19d7a62f4c58fbcb"
  },
  {
    "url": "assets/js/21.e705be23.js",
    "revision": "02bdf605a0a8e2e0a965beff7d6996f1"
  },
  {
    "url": "assets/js/22.efc39414.js",
    "revision": "3dc006656ef09c0f818bd5275caa5fe2"
  },
  {
    "url": "assets/js/23.5f4c7658.js",
    "revision": "f25906e5179c000a0f9907fe8aea0c43"
  },
  {
    "url": "assets/js/24.359a62e4.js",
    "revision": "1be17206153dba63e078fa72d92e3904"
  },
  {
    "url": "assets/js/25.c49ef7a9.js",
    "revision": "0d85b5d05db1954077cd949905613476"
  },
  {
    "url": "assets/js/26.8d45691f.js",
    "revision": "10cf1646b561ae64da5e24ec8fafd320"
  },
  {
    "url": "assets/js/27.364b1802.js",
    "revision": "d8a6eb69dab32e216394ce15a0d346a1"
  },
  {
    "url": "assets/js/28.485228c0.js",
    "revision": "a847023a9e6f4a64f032e981a2dbb45e"
  },
  {
    "url": "assets/js/29.0ee8fc42.js",
    "revision": "104ea3e8130e00c6e53a694117d22277"
  },
  {
    "url": "assets/js/3.589a64d8.js",
    "revision": "9d884dca321afb2249af759610a18e26"
  },
  {
    "url": "assets/js/30.465920a7.js",
    "revision": "e6f985441c64513a61cd47839cd45282"
  },
  {
    "url": "assets/js/4.1dbf8b08.js",
    "revision": "7d2b41819faa077262b7fdc6dfc9b102"
  },
  {
    "url": "assets/js/5.9253897f.js",
    "revision": "05d80452b78924c37cf5aaa1196d260b"
  },
  {
    "url": "assets/js/6.4c1f13e3.js",
    "revision": "a0bffbfe8375a8754617f6bcfa944bdc"
  },
  {
    "url": "assets/js/7.bc1839d0.js",
    "revision": "2cd4abc1cf7e8c446a44487665909c97"
  },
  {
    "url": "assets/js/8.611f5ec5.js",
    "revision": "3d01fe0316766509769db95587535797"
  },
  {
    "url": "assets/js/9.5813bb74.js",
    "revision": "f8d25307b187e918aaf4de552bb3fbe2"
  },
  {
    "url": "assets/js/app.7fa07907.js",
    "revision": "b8425bdd6209d029e6f9d7ebc108ddf3"
  },
  {
    "url": "dsm/algorithm.html",
    "revision": "cbb1f6c067528dc92740db1d6ba87621"
  },
  {
    "url": "dsm/architecture.html",
    "revision": "e62fde9d11666087a3bcaa4b47b31f6a"
  },
  {
    "url": "dsm/cc150.html",
    "revision": "34f013d7846ddd0f58165d23e3a67d0d"
  },
  {
    "url": "dsm/finger.html",
    "revision": "b012f0cb273e655cd03e922ae7b8a4b0"
  },
  {
    "url": "dsm/index.html",
    "revision": "5968def275fcf9f48c796f214aca8b94"
  },
  {
    "url": "dsm/jsbook.html",
    "revision": "4232113b8965daaf2e22e061596fa441"
  },
  {
    "url": "dsm/lodash.html",
    "revision": "b4e10740fad3ecbb8e0fd5828509c71a"
  },
  {
    "url": "dsm/node.html",
    "revision": "065e3d987a6e44351b0f91ffefc2d9bc"
  },
  {
    "url": "dsm/pattern.html",
    "revision": "b1cbe0bcecea62bf61889269ab043632"
  },
  {
    "url": "dsm/protocol.html",
    "revision": "8f6f1b7d863f5f374ca2d783c70907ba"
  },
  {
    "url": "dsm/webgl.html",
    "revision": "491eadadf7ce191db4fa1a7af70acee4"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "7e5f1bde502887c7d080570e5e19e34c"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "d4687de5b9294e8ba4cbdcc4b8df2fb7"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "205134aa846f4ada99a3419051f758bd"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "e5ac145ac2a37d0f517507d60b4352e2"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "46c56cb89289e6f7ad77c376c93f0da4"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "43b19da702058df82805488c8a296638"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "6f52f2483548a97a22ca652e96ec0764"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "17b85643b3f4292509d4f6c7911aa081"
  },
  {
    "url": "icons/icon.svg",
    "revision": "0129784937e9f6540e23de6d9d5eb402"
  },
  {
    "url": "images/IMG_7674.gif",
    "revision": "1412750551f65dffe86959912535fe07"
  },
  {
    "url": "images/IMG_7723.gif",
    "revision": "bb301b9b41520621ca33d47472b92cdf"
  },
  {
    "url": "images/IMG_7777.jpg",
    "revision": "b25861088173eee6d862dc28ecebf9a0"
  },
  {
    "url": "images/IMG_7778.png",
    "revision": "a37a488f3047bb9f528ad0bbbf6aec30"
  },
  {
    "url": "images/IMG_8029.gif",
    "revision": "0bf50bc1e4c50846592c8b9c8155c5c2"
  },
  {
    "url": "images/IMG_8500.png",
    "revision": "dd985216fe51ce074c0a7142f0be37e3"
  },
  {
    "url": "images/IMG_8501.png",
    "revision": "c7ba6b4b2eea58d0e95c848e919a980f"
  },
  {
    "url": "images/IMG_8648.gif",
    "revision": "ab11758320234f5cf9bcfee2a233e6bc"
  },
  {
    "url": "images/IMG_8740.gif",
    "revision": "0addc5ac9cfe74b42c74025d6fe78e12"
  },
  {
    "url": "images/IMG_8842.jpeg",
    "revision": "63a867cd117bbe98d1d0646e277ae017"
  },
  {
    "url": "images/IMG_8865.gif",
    "revision": "b88338d9f63c4d31dafc614a334c2fac"
  },
  {
    "url": "images/IMG_8898.gif",
    "revision": "9c67354a6785143544fbf1decca06144"
  },
  {
    "url": "images/IMG_9006.jpg",
    "revision": "8ff8954f25f8ef331e6f4ec97ca309e0"
  },
  {
    "url": "images/IMG_9020.jpeg",
    "revision": "ec37d5887af94311e2bb08c6e9c29af7"
  },
  {
    "url": "images/IMG_9021.jpeg",
    "revision": "60b49acc2e2102eb3fe4f9459a1445a3"
  },
  {
    "url": "images/IMG_9023.jpg",
    "revision": "f3cbbfbf1849abfd07e36697858c1d11"
  },
  {
    "url": "images/IMG_9024.jpg",
    "revision": "dbc8786d4a660ebc46ad5f59f5dc29df"
  },
  {
    "url": "images/IMG_9025.jpeg",
    "revision": "a17ee78376b011b001714a197bd2a396"
  },
  {
    "url": "images/IMG_9026.jpeg",
    "revision": "a8840f81d295de71f2accd61ab00d075"
  },
  {
    "url": "images/IMG_9146.jpg",
    "revision": "620ac3c5de4d285a8100a59454118809"
  },
  {
    "url": "images/IMG_9353.jpeg",
    "revision": "e15e91907989cba1d85fa60e26b8d152"
  },
  {
    "url": "index.html",
    "revision": "883e73c16cb74a80dbca4149fb5572a2"
  },
  {
    "url": "lbw/concurrent.html",
    "revision": "18066b41b92bb60ce117995680f6920c"
  },
  {
    "url": "lbw/es.html",
    "revision": "0bfd533f38f5679ec76afaa298f60c83"
  },
  {
    "url": "lbw/index.html",
    "revision": "32462a6de01148821f9fe7c1a0a4a295"
  },
  {
    "url": "lbw/job.html",
    "revision": "f4032ad71f96c04e5159cc9c61f87637"
  },
  {
    "url": "lbw/mq.html",
    "revision": "6d51ba0eed591ff03c13d0fb3bc579ba"
  },
  {
    "url": "lbw/mysql.html",
    "revision": "c314176d7c314221303d06f719c2a686"
  },
  {
    "url": "lbw/ood.html",
    "revision": "4b2d8b616cc621c23f279c2b3312d070"
  },
  {
    "url": "lbw/redis.html",
    "revision": "ea83dcde03e434f188d58598c8493207"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_00.png",
    "revision": "ca0698ca5a3bf2400e5cf8a1f456a61c"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_01.png",
    "revision": "c960c28ee3f0353023d9498d2362d23c"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_02.png",
    "revision": "efb0515bcaee933f8c38e750d2c4bd3b"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_03.png",
    "revision": "f735487e72e73a0ea528975041548a14"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_04.png",
    "revision": "5b282aa9f7d4fa68cc24c946c0556b87"
  },
  {
    "url": "live2d/shizuku/assets/moc/shizuku.1024/texture_05.png",
    "revision": "16f7b74f1e61bf2b21d91ea5c3ee71de"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
