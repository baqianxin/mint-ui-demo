<template>
  <div class="home">
    <h3>{{ msg }}</h3>
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
      <div class="product_content">
        <article class="thing">
          <header class="cover">
            <a class="cover-inner" target="_blank" href="/things/wei-le-weloop-now">
              <img alt="WeLoop Now"
                   src="https://making-photos.b0.upaiyun.com/photos/596b4bbbd76e31e9fd94548a3fdd1f50.png!thing.fixed.big"/>
            </a>
          </header>
          <section class="content">
            <h4 class="title">
              <a target="_blank" title="WeLoop Now" href="/things/wei-le-weloop-now">WeLoop Now</a>
            </h4>
          </section>
          <footer class="info">
            <div class="stats">
              <a target="_blank" href="/things/wei-le-weloop-now">
                <i class="fa fa-check-circle-o"></i>
                <span class="owners_count">
                                        <span class="humanized_number" title="1457">1.5K</span>
                                    </span>
              </a>
              <a target="_blank" href="/things/wei-le-weloop-now/reviews">
                <i class="fa fa-pencil"></i>
                <span class="reviews_count">16</span>
              </a>
            </div>
            <div class="interactions">
              <span class="fancy_button">
                  <a class="unfancied" title="喜欢此产品" data-toggle="modal" data-target="#login-modal"
                     data-link="https://knewone.com/things/wei-le-weloop-now"
                     data-signin-legend="登录后，收集喜欢的产品" data-category="thing" data-action="fancy"
                     data-label="WeLoop Now" href="#">
                      <i class="fa fa-heart-o"></i>
                      <span class="fanciers_count">
                          <span class="humanized_number" title="2781">2.8K</span>
                      </span>
                      <small>喜欢</small>
                  </a>
              </span>
              <a title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表"
                 href="#login-modal">
                <i class="fa fa-list-ko"></i>
              </a>
            </div>
          </footer>
          <small class="subscription-label">
            From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank"
                                   href="/things/ido-zhi-neng-shi-shang-shou-biao"><img alt="IDO 智能时尚手表" class="js-lazy"
                                                                                        src="https://making-photos.b0.upaiyun.com/photos/766a14cff8235b1dc3ac8c04c17186e7.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="IDO 智能时尚手表"
                                                        href="/things/ido-zhi-neng-shi-shang-shou-biao">IDO 智能时尚手表</a>
          </h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/ido-zhi-neng-shi-shang-shou-biao"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">7</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/ido-zhi-neng-shi-shang-shou-biao"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="IDO 智能时尚手表" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">151</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/misfit-flash"><img
            alt="Misfit Flash" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/db2c5866c86c480f8632b52d86a1132d.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="Misfit Flash"
                                                        href="/things/misfit-flash">Misfit Flash</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/misfit-flash"><i class="fa fa-check-circle-o"></i><span
              class="owners_count">15</span></a><a target="_blank" href="/things/misfit-flash/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">3</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/misfit-flash"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="Misfit Flash" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">147</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank"
                                   href="/things/a-ba-ting-2-dai-er-tong-zhi-neng-shou-biao"><img alt="阿巴町 2 代 儿童智能手表"
                                                                                                  class="js-lazy"
                                                                                                  src="https://making-photos.b0.upaiyun.com/photos/798c825c7a9a8755f938bde20df13548.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="阿巴町 2 代 儿童智能手表"
                                                        href="/things/a-ba-ting-2-dai-er-tong-zhi-neng-shou-biao">阿巴町 2
            代 儿童智能手表</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/a-ba-ting-2-dai-er-tong-zhi-neng-shou-biao"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">50</span></a><a target="_blank"
                                                                                          href="/things/a-ba-ting-2-dai-er-tong-zhi-neng-shou-biao/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">2</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/a-ba-ting-2-dai-er-tong-zhi-neng-shou-biao"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="阿巴町 2 代 儿童智能手表" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">141</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/sony-smartband"><img
            alt="SONY SmartBand" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/a2ff26d64a96794f597d93cca6974fdb.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="SONY SmartBand"
                                                        href="/things/sony-smartband">SONY SmartBand</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/sony-smartband"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">3</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/sony-smartband"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="SONY SmartBand" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">132</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/arrow-smartwatch"><img
            alt="Arrow Smartwatch" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/040da960b88671256be992ee9355dbce.png!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="Arrow Smartwatch"
                                                        href="/things/arrow-smartwatch">Arrow Smartwatch</a></h4>
          </section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/arrow-smartwatch"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">8</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/arrow-smartwatch"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="Arrow Smartwatch" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">131</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank"
                                   href="/things/aurora-zhi-neng-shou-biao-oband"><img alt="Aurora 智能手表——Oband"
                                                                                       class="js-lazy"
                                                                                       src="https://making-photos.b0.upaiyun.com/photos/50991815db8a924356ecf418bc3664ca.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="Aurora 智能手表——Oband"
                                                        href="/things/aurora-zhi-neng-shou-biao-oband">Aurora
            智能手表——Oband</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/aurora-zhi-neng-shou-biao-oband"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">20</span></a><a target="_blank"
                                                                                          href="/things/aurora-zhi-neng-shou-biao-oband/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">4</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/aurora-zhi-neng-shou-biao-oband"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="Aurora 智能手表——Oband" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">127</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank"
                                   href="/things/misfit-shine-biao-dai-xiang-lian-pei-jian"><img
            alt="Misfit Shine 表带项链配件" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/77a06d86f7933a3f06318261d57ff15f.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="Misfit Shine 表带项链配件"
                                                        href="/things/misfit-shine-biao-dai-xiang-lian-pei-jian">Misfit
            Shine 表带项链配件</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/misfit-shine-biao-dai-xiang-lian-pei-jian"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">6</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/misfit-shine-biao-dai-xiang-lian-pei-jian"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="Misfit Shine 表带项链配件" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">125</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/sweetips-mi-jing"><img
            alt="Sweetips 秘镜" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/acc55f7fe7917375f815fbff4a3b699a.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="Sweetips 秘镜"
                                                        href="/things/sweetips-mi-jing">Sweetips 秘镜</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/sweetips-mi-jing"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">12</span></a><a target="_blank"
                                                                                          href="/things/sweetips-mi-jing/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">15</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/sweetips-mi-jing"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="Sweetips 秘镜" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">114</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/galaring"><img
            alt="GalaGreat galaring" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/269141fe849a30405575d541d8908cd7.png!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="GalaGreat galaring"
                                                        href="/things/galaring">GalaGreat galaring</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/galaring"><i class="fa fa-check-circle-o"></i><span
              class="owners_count">8</span></a><a target="_blank" href="/things/galaring/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">4</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/galaring"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="GalaGreat galaring" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">114</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/fitbit-charge-hr"><img
            alt="fitbit Charge HR" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/68c75f8e26fef1e4fe91fbeba1c5e475.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="fitbit Charge HR"
                                                        href="/things/fitbit-charge-hr">fitbit Charge HR</a></h4>
          </section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/fitbit-charge-hr"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">22</span></a><a target="_blank"
                                                                                          href="/things/fitbit-charge-hr/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">5</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/fitbit-charge-hr"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="fitbit Charge HR" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">113</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/withings-pulse-o2-jian-ce-qi"><img
            alt="Withings Pulse O2 监测器" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/ea6e07e1cc000ebcf728cc13946d89c5.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="Withings Pulse O2 监测器"
                                                        href="/things/withings-pulse-o2-jian-ce-qi">Withings Pulse O2
            监测器</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/withings-pulse-o2-jian-ce-qi"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">5</span></a><a target="_blank"
                                                                                         href="/things/withings-pulse-o2-jian-ce-qi/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">1</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/withings-pulse-o2-jian-ce-qi"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="Withings Pulse O2 监测器" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">107</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/swyp-mo-qia-he"><img
            alt="Swyp 万卡合一" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/ae7768d283a3d1b38b257da3cb326a67.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="Swyp 万卡合一" href="/things/swyp-mo-qia-he">Swyp
            万卡合一</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/swyp-mo-qia-he"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">8</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/swyp-mo-qia-he"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="Swyp 万卡合一" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">104</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/misfit-shine-bloom-necklace"><img
            alt="Misfit Shine Bloom Necklace" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/5b09673d0ce29875df8769414170a7e1.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="Misfit Shine Bloom Necklace"
                                                        href="/things/misfit-shine-bloom-necklace">Misfit Shine Bloom
            Necklace</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/misfit-shine-bloom-necklace"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">5</span></a><a target="_blank"
                                                                                         href="/things/misfit-shine-bloom-necklace/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">1</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/misfit-shine-bloom-necklace"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="Misfit Shine Bloom Necklace" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">100</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank"
                                   href="/things/moov-zhi-neng-chuan-dai-she-bei"><img alt="Moov 智能穿戴设备" class="js-lazy"
                                                                                       src="https://making-photos.b0.upaiyun.com/photos/40cf2ae8e7bd5becaefeb2ee6518e9a6.png!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="Moov 智能穿戴设备"
                                                        href="/things/moov-zhi-neng-chuan-dai-she-bei">Moov 智能穿戴设备</a>
          </h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/moov-zhi-neng-chuan-dai-she-bei"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">11</span></a><a target="_blank"
                                                                                          href="/things/moov-zhi-neng-chuan-dai-she-bei/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">4</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/moov-zhi-neng-chuan-dai-she-bei"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="Moov 智能穿戴设备" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">97</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/mai-bu-ji-bu-qi-v2"><img
            alt="麦步 计步器 V2" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/325e7fef0102ae8444d4f3df29e05a2f.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="麦步 计步器 V2"
                                                        href="/things/mai-bu-ji-bu-qi-v2">麦步 计步器 V2</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/mai-bu-ji-bu-qi-v2"><i class="fa fa-check-circle-o"></i><span
              class="owners_count">21</span></a><a target="_blank" href="/things/mai-bu-ji-bu-qi-v2/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">2</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/mai-bu-ji-bu-qi-v2"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="麦步 计步器 V2" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">97</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/pebble-steel"><img
            alt="Pebble Technology Pebble Steel" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/b10a911f2625305414580dba15e8297f.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="Pebble Technology Pebble Steel"
                                                        href="/things/pebble-steel">Pebble Technology Pebble Steel</a>
          </h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/pebble-steel"><i class="fa fa-check-circle-o"></i><span
              class="owners_count">14</span></a><a target="_blank" href="/things/pebble-steel/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">3</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/pebble-steel"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="Pebble Technology Pebble Steel"
                                                                    href="#"><i class="fa fa-heart-o"></i><span
              class="fanciers_count">96</span><small>喜欢</small></a></span><a title="加入列表" class="add_to_list"
                                                                             data-toggle="modal"
                                                                             data-signin-legend="登录后，把产品加入列表"
                                                                             href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/ticwatch-2"><img alt="Ticwatch 2"
                                                                                                      class="js-lazy"
                                                                                                      src="https://making-photos.b0.upaiyun.com/photos/4fbb1ff246b955811022435cef706037.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="Ticwatch 2" href="/things/ticwatch-2">Ticwatch
            2</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/ticwatch-2"><i class="fa fa-check-circle-o"></i><span
              class="owners_count">13</span></a><a target="_blank" href="/things/ticwatch-2/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">4</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/ticwatch-2"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="Ticwatch 2" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">94</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank"
                                   href="/things/fitbit-charge-zhi-neng-le-huo-yun-dong-shou-huan"><img
            alt="fitbit Charge 智能运动手环" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/1f6bc85fea37a606ba03f2f5ac65c455.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="fitbit Charge 智能运动手环"
                                                        href="/things/fitbit-charge-zhi-neng-le-huo-yun-dong-shou-huan">fitbit
            Charge 智能运动手环</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/fitbit-charge-zhi-neng-le-huo-yun-dong-shou-huan"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">16</span></a><a target="_blank"
                                                                                          href="/things/fitbit-charge-zhi-neng-le-huo-yun-dong-shou-huan/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">4</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/fitbit-charge-zhi-neng-le-huo-yun-dong-shou-huan"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="fitbit Charge 智能运动手环" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">94</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/oaxis-ao-si-star-dot-21-xing-huan"><img
            alt="OAXIS Star.21 星环" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/d67a47d5fdca4cb88d4c02cccb601272.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="OAXIS Star.21 星环"
                                                        href="/things/oaxis-ao-si-star-dot-21-xing-huan">OAXIS Star.21
            星环</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/oaxis-ao-si-star-dot-21-xing-huan"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">21</span></a><a target="_blank"
                                                                                          href="/things/oaxis-ao-si-star-dot-21-xing-huan/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">6</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/oaxis-ao-si-star-dot-21-xing-huan"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="OAXIS Star.21 星环" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">94</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/oppo-o-band"><img alt="OPPO O-Band"
                                                                                                       class="js-lazy"
                                                                                                       src="https://making-photos.b0.upaiyun.com/photos/58b8009b28f0717969195510d50aa9d8.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="OPPO O-Band" href="/things/oppo-o-band">OPPO
            O-Band</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/oppo-o-band"><i class="fa fa-check-circle-o"></i><span
              class="owners_count">5</span></a><a target="_blank" href="/things/oppo-o-band/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">3</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/oppo-o-band"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="OPPO O-Band" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">94</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank"
                                   href="/things/ji-kong-zhe-di-er-dai-zhi-neng-jie-zhi"><img alt="极控者 第二代智能戒指"
                                                                                              class="js-lazy"
                                                                                              src="https://making-photos.b0.upaiyun.com/photos/3ffe6d44b9c3db3ade538cbec0e56bc3.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="极控者 第二代智能戒指"
                                                        href="/things/ji-kong-zhe-di-er-dai-zhi-neng-jie-zhi">极控者
            第二代智能戒指</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/ji-kong-zhe-di-er-dai-zhi-neng-jie-zhi"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">2</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/ji-kong-zhe-di-er-dai-zhi-neng-jie-zhi"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="极控者 第二代智能戒指" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">93</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/weloop-xiao-hei-2"><img
            alt="WeLoop 小黑 2" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/8855044ce8970018e43ea31e8c38e604.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="WeLoop 小黑 2"
                                                        href="/things/weloop-xiao-hei-2">WeLoop 小黑 2</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/weloop-xiao-hei-2"><i
              class="fa fa-check-circle-o"></i><span class="owners_count">43</span></a><a target="_blank"
                                                                                          href="/things/weloop-xiao-hei-2/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">10</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/weloop-xiao-hei-2"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="WeLoop 小黑 2" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">88</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/cicret-ke-shi-hua-shou-huan"><img
            alt="“ cicret ”可视化手环" class="js-lazy"
            src="https://making-photos.b0.upaiyun.com/photos/877f998be4b977d9a1d1c445db6c425e.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="“ cicret ”可视化手环"
                                                        href="/things/cicret-ke-shi-hua-shou-huan">“ cicret ”可视化手环</a>
          </h4></section>
          <footer class="info">
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/cicret-ke-shi-hua-shou-huan"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="“ cicret ”可视化手环" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">88</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
        <article class="thing">
          <header class="cover"><a class="cover-inner" target="_blank" href="/things/noke"><img alt="Noke 蓝牙智能锁"
                                                                                                class="js-lazy"
                                                                                                src="https://making-photos.b0.upaiyun.com/photos/d41f83e09915efa68ff3f281bab6467d.jpg!thing.fixed.small"/></a>
          </header>
          <section class="content"><h4 class="title"><a target="_blank" title="Noke 蓝牙智能锁" href="/things/noke">Noke
            蓝牙智能锁</a></h4></section>
          <footer class="info">
            <div class="stats"><a target="_blank" href="/things/noke"><i class="fa fa-check-circle-o"></i><span
              class="owners_count">1</span></a><a target="_blank" href="/things/noke/reviews"><i
              class="fa fa-pencil"></i><span class="reviews_count">1</span></a></div>
            <div class="interactions"><span class="fancy_button"><a class="unfancied" title="喜欢此产品" data-toggle="modal"
                                                                    data-target="#login-modal"
                                                                    data-link="https://knewone.com/things/noke"
                                                                    data-signin-legend="登录后，收集喜欢的产品"
                                                                    data-category="thing" data-action="fancy"
                                                                    data-label="Noke 蓝牙智能锁" href="#"><i
              class="fa fa-heart-o"></i><span class="fanciers_count">86</span><small>喜欢</small></a></span><a
              title="加入列表" class="add_to_list" data-toggle="modal" data-signin-legend="登录后，把产品加入列表" href="#login-modal"><i
              class="fa fa-list-ko"></i></a></div>
          </footer>
          <small class="subscription-label">From<a target="_blank" href="/things/categories/ge-ren-pei-shi">个人配饰</a>
          </small>
        </article>
      </div>
    </mt-loadmore>
  </div>
</template>

<script type="text/babel">
  import {Toast} from 'mint-ui';
  // mounted 钩子函数  这里去请求豆瓣数据
  export default {
    name: 'home',
    data () {
      return {
        msg: '精选列表',
        allLoaded: true,
        articles: []
      };
    },
    created: function () {  // 这里mounted和created生命周期函数区别
      this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {},
        emulateJSON: true
      }).then(function (response) {
        // 这里是处理正确的回调
        console.log(response);
        this.articles = response.data.subjects;
        // this.articles = response.data["subjects"] 也可以
      }, function (response) {
        // 这里是处理错误的回调
        console.log(response);
      });
    },
    methods: {
      loadTop () {
        Toast('loadTop');
      },

      loadBottom () {
        Toast('loadBottom');
      },

      allLoaded () {
        Toast('allLoaded');
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li{
border-bottom: 1px solid #999;
padding: 10px 0;
}

.inl-block{
display: inline-block;
}

.m-img{

}
.m-content{
margin-left: 20px;
}

.thing {
    margin-bottom: 20px;
}
article.thing {
    background: white;
    position: relative;
}
article.thing header.cover {
    position: relative;
}
article.thing header.cover .cover-inner {
    display: block;
    height: 0;
    overflow: hidden;
    padding-bottom: 75%;
}
article.thing section.content {
    padding: 1em;
}
article.thing section.content h4 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
    font-size: 14px;
    min-height: 20.0px;
}
article.thing section.content h4 a {
    color: #333;
}
article.thing footer.info {
    padding: 0 1em 1em;
    width: 100%;
}
article.thing footer.info:before, article.thing footer.info:after {
    content: " ";
    display: table;
}
*:before, *:after {
    box-sizing: border-box;
}
article.thing footer.info .stats {
    float: left;
    max-width: 57%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 6px;
}
article.thing footer.info .stats>* {
    margin-right: .5em;
    color: #999;
}
a {
    word-wrap: break-word;
}
article.thing header.cover img {
    width: 100%;
}
img {
    max-width: 100%;
}
img {
    vertical-align: middle;
}
img {
    border: 0;
}
* {
    box-sizing: border-box;
}

</style>
