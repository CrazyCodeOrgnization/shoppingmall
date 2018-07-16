<template>
  <div class="layout">
    <Layout>
      <!--<Header>Header</Header>-->
      <Content class="contentPadd">
        <Row>
          <Col span="12">
            <img class="GoodImg" src="../../assets/first.jpg" alt="">
          </Col>
          <Col span="12" style="text-align: left;padding-left: 40px">
            <div class="hj_MainTitle">{{shopModel.NAME}}</div>
          <br/>
            <div class="hj_helpColor">{{shopModel.desc}}</div>
          <br/>
          <br/>
          <div class="hj_contentColor">价格 <span class="priceClass"><span class="subClass">￥</span>{{shopModel.price}}</span></div>
          </Col>
        </Row>
      </Content>
      <!--<Footer>Footer</Footer>-->
    </Layout>
  </div>
</template>
<style scoped>
  .contentPadd{
    width: 1090px;
    margin: 0 auto;
    padding-top: 100px;
    /*padding: 40px 80px;*/
  }
  .priceClass{
    color: red;
    font-size:26px;

  }
 .GoodImg{
   width: 100%;
   height: 500px;
   /*padding-top: 100%;*/
 }
</style>
<script>
export default {
  data () {
    return {
      shopModel: {
        goodId: '',
        NAME: '芒果干 118克',
        desc: '新鲜澳芒，甜鲜果味',
        price: '16',
        reverse: '28',
        saleCount: '20'
      },
      buyCount: 1
    }
  },
  methods: {

  }
}
</script>
