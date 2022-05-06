<template>
  <div class="deliveryReport">
  
    <div class="logo">
      <img src="@/assets/img/logo.svg" />
      <span>데일리세탁</span>
    </div>
    <div class="orderNumber">
      <span>
        주문번호
      </span>
      <strong>
        5D0IFK-6500
      </strong>
    </div>
    <div class="divider blackColor" />
    <div class="userInfo">
      <dl>
        <dt>주문자</dt>
        <dd>박수민</dd>
      </dl>
      <dl>
        <dt>수거/배달 장소</dt>
        <dd>부산광역시 사상구 덕상로 1 (덕포동) 월드크리닝 덕포지사</dd>
      </dl>
      <dl>
        <dt>세탁픽업일</dt>
        <dd>2021년 12월 17일</dd>
      </dl>
    </div>
    <div class="divider"/>

    <div class="product">
      <dl class="title">
        <dt>상품명</dt>
        <dd>수량</dd>
      </dl>
      <dl class="item" v-for="item in 5" :key="item">
        <dt>흰색와이셔츠</dt>
        <dd>2개</dd>
      </dl>
    </div>

    <div class="divider"/>

    <div class="image-info pickup-info">
      <dl>
        <dt>픽업일시</dt>
        <dd>
          <span>2022.4.12</span>
          <span>12:34</span> 
        </dd>
      </dl>
      <img src="https://picsum.photos/500/1000" alt="픽업사진">
    </div>
    <div class="divider" />
    <div class="image-info delvery-info">
      <dl>
        <dt>배송일시</dt>
        <dd>
          <span>2022.4.12</span>
          <span>12:34</span> 
        </dd>
      </dl>
      <img src="https://picsum.photos/500/1001" alt="픽업사진">
    </div>
  </div>  
</template>

<style lang="scss" scoped src="./deliveryReport.scss" />
