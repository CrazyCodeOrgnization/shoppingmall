<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <Button @click="toGoodDetail" type="primary" icon="ios-search" class="layout-search">找我想要</Button>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              我的
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              我的订单
            </MenuItem>

            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              我的商城
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              我的购物车
            </MenuItem>
          </div>
        </Menu>
        <div></div>
      </Header>

      <div class="container">
        <div class="banner">
          <Carousel autoplay v-model="loopindex" loop :radius-dot="bannerSetting.radiusDot">
            <CarouselItem>
              <div class="banner-item test-backcolor">1</div>
            </CarouselItem>
            <CarouselItem>
              <div class="banner-item">2</div>
            </CarouselItem>
            <CarouselItem>
              <div class="banner-item">3</div>
            </CarouselItem>
            <CarouselItem>
              <div class="banner-item">4</div>
            </CarouselItem>
          </Carousel>
        </div>
        <Content :style="{padding: '0 50px'}">
          <div class="category-box">
            <div class="side-category">
              <ul class="category-list">
                <li class="category-item">我的分类1
                  <div class="sub-menu">
                    <div class="leftmenu">
                      <dd>
                        <a href="#">平板电视</a>
                        <a href="#">空调</a>
                        <a href="#">冰箱</a>
                        <a href="#">洗衣机</a>
                        <a href="#">家庭影院</a>
                        <a href="#">DVD</a>
                        <a href="#">迷你音响</a>
                        <a href="#">烟机/灶具</a>
                        <a href="#"> 热水器</a>
                        <a href="#">消毒柜/洗碗机</a>
                        <a href="#">冷柜/冰吧</a>
                        <a href="#">酒柜</a>
                        <a href="#">家电配件</a>
                      </dd>
                    </div>
                    <div class="rightmenu">
                      <dl>
                        <dd>
                          <a  href="http://sale.jd.com/act/1XDZ6ShE5M7tTrl.html">
                            <img
                              src="http://img10.360buyimg.com/vclist/jfs/t1198/21/1061230330/3619/48ee51cc/556ed3a0N9004a8f7.jpg"
                              title="by:罗坚元">
                          </a>
                        </dd>
                        <dd>
                          <a  href="http://sale.jd.com/act/v8kJIaPmsMGuebpH.html">
                            <img
                              src="http://img11.360buyimg.com/vclist/jfs/t1531/43/307393451/3092/229dc57a/557194e1N0d5188f3.jpg"
                              title="by:罗坚元">
                          </a>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </li>

                <li class="category-item">我的分类2</li>
                <li class="category-item">我的分类2</li>
              </ul>
            </div>
            <div class="recommed-category">
              <img class="image-box"
                   src="https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/18d8bc3eb13533faa7462fdea9d3fd1f40345b49.jpg"/>
              <img class="image-box"
                   src="https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/18d8bc3eb13533faa7462fdea9d3fd1f40345b49.jpg"/>
              <img class="image-box"
                   src="https://ss2.baidu.com/-vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/18d8bc3eb13533faa7462fdea9d3fd1f40345b49.jpg"/>
            </div>
          </div>
          <div class="shopping-list-box">
            <section class="shopping-sec-box">
              <ul class="shopping-list">
                <li class="shopping-item"></li>
                <li class="shopping-item"></li>
                <li class="shopping-item"></li>
                <li class="shopping-item"></li>
                <li class="shopping-item"></li>
                <li class="shopping-item"></li>
              </ul>
            </section>
            <section class="shopping-sec-box">
              <ul class="shopping-list">
                <li class="shopping-item"></li>
                <li class="shopping-item"></li>
              </ul>
            </section>
            <section class="shopping-sec-box">
              <ul class="shopping-list">
                <li class="shopping-item"></li>
                <li class="shopping-item"></li>
              </ul>
            </section>
          </div>
        </Content>

      </div>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
    </Layout>
  </div>
</template>
<style scoped lang="less">
   @import "../../css/theme.less";
   @import "../../css/home.css";
</style>
<script>
import { Slider } from 'iview'
export default {
  name: 'Home',
  components: {Slider},
  data () {
    return {
      msg: this.$store.state.message,
      value: [20, 50],
      loopindex: 0,
      bannerSetting: {
        radiusDot: true,
        autoplay: true
      }
    }
  },
  mounted () {
  },
  methods: {
    toGoodDetail () {
      this.jump({
        path: '/goodsDetail'
      })
    }
  }
}
</script>
