<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <Button type="primary" icon="ios-search" class="layout-search">找我想要</Button>
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
              <div class="banner-item">1</div>
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
<style scoped>
  .sub-menu {
    display: block;
    box-sizing: border-box;
    position: absolute;
    height: 150px;
    left: 200px;
    right:0px;
    top: 0px;
    background-color: black;
  }

  .leftmenu {
    width: 550px;
    overflow: hidden;
    float: left;
  }

  .leftmenu dd {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 30px;
    font-weight: bold;
    color: #737373;
    padding: 0 8px;

  }

  .leftmenu dd a {
    color: #737373;
    float: left;
    line-height: 20px;
    padding: 0 10px;
    border: 1px solid red;
    border-radius: 15px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin: 5px;
    font-size: 12px;
    margin-top: 5px;
  }

  .rightmenu {
    float: right;
    height: 150px;
  }

  .rightmenu dl {
    margin-top: 4%;
    height: 100%;

  }

  .rightmenu dl dd {
    width: 168px;
    height: 45%;
    padding: 0;
    margin-bottom: 2%;
  }
  .rightmenu dl dd a{
    height: 100%;
    width: 100%;
  }
  .rightmenu dl dd a img{
    height: 100%;
    width: 100%;
  }
  shopping-box {
    padding: 0 60px;
  }

  .category-box {
    position: relative;
    width: 100%;
    height: 150px;
    background-color: white;
    display: flex;
    flex-direction: row;
  }

  .side-category {
    width: 200px;
    height: 100%;
    background-color: yellow;
  }

  .recommed-category {
    flex: 1;
    height: 100%;
    background-color: #42b983;
  }

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-search {
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .shopping-list {
    list-style-type: none;
    padding: 20px 0;
    padding-bottom: 0px;
    width: 100%;
    display: flex;
    background-color: green;
    flex-direction: row;
    align-content: flex-start;
    flex-wrap: wrap;
  }

  .shopping-sec-box {

  }

  .shopping-item {
    width: 20%;
    height: 300px;
    margin: 10px;
    background-color: #2c3e50;
  }

  .layout-nav {
    width: 480px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-footer-center {
    text-align: center;
  }

  .banner {
    width: 100%;
  }

  .banner-item {
    width: 100%;
    height: 240px;
  }

  .container {
    width: 100%;
    position: relative;
    min-width: 1280px;
  }

  .category-list {
    padding-top: 5px;
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }

  .category-box .category-list .category-item {
    height: 30px;
    color: black;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
  }

  .image-box {
    box-sizing: content-box;
    width: 33%;
    height: 100%;
  }
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
    }
  }
</script>
