<template>
  <div class="cardAdd">
    <div class="page-title">
      <h2>카드등록</h2>
      <p>결제에 사용하실 카드를 등록해주세요</p>
    </div>

    <div class="form">
      <v-row class="row">
        <v-col cols="12">
          <dl>
            <dt>카드번호</dt>
            <dd>
              <v-text-field
                dense
                hide-details="auto"
                height="40px"
                type="number"
                color="#0CA0E2"
              />
            </dd>
          </dl>
        </v-col>
        <v-col cols="6">
          <dl>
            <dt>만료일</dt>
            <dd>
              <v-text-field
                dense
                hide-details="auto"
                height="40px"
                placeholder="MM"
                type="number"
                color="#0CA0E2"
                counter="2"
                maxlength="20"
                style="margin-right:10px;"
              >
                <template slot:input="{item}">
                  <input type="text">
                </template>
              </v-text-field>
              <v-text-field
                dense
                hide-details="auto"
                height="40px"
                placeholder="YY"
                type="number"
                color="#0CA0E2"
              />
            </dd>
          </dl>
        </v-col>
        <v-col cols="6">
          <dl>
            <dt>카드비밀번호</dt>
            <dd>
              <v-text-field
                dense
                hide-details="auto"
                height="40px"
                placeholder="앞 2자리"
                type="password"
                color="#0CA0E2"
              />
            </dd>
          </dl>
        </v-col>
        <v-col cols="6">
          <dl v-if="toggle === 0">
            <dt>생년월일</dt>
            <dd>
              <v-text-field
                dense
                hide-details="auto"
                height="40px"
                type="number"
                placeholder="6자리 (예:990214)"
                color="#0CA0E2"
              />
            </dd>
          </dl>

          <dl v-else>
            <dt>사업자번호</dt>
            <dd>
              <v-text-field
                dense
                hide-details="auto"
                height="40px"
                type="number"
                placeholder="10자리 (예:990214)"
                color="#0CA0E2"
                
              />
            </dd>
          </dl>
        </v-col>
        <v-col cols="6" class="type_btns">
          <dl>
            <dd>
              <v-btn-toggle v-model="toggle" mandatory color="#0CA0E2">
                <v-btn text>개인</v-btn>
                <v-btn text>법인</v-btn>
              </v-btn-toggle>
            </dd>
          </dl>
        </v-col>
      </v-row>

      <p v-show="toggle === 1">* 법인카드의 경우 카카오채팅으로 영수증을 요청해주시면 즉시 전달해 드립니다. (카카오톡 운영: 평일 09:00 ~ 18:00)</p>
    </div>

    <v-btn text class="finishBtn" @click="$router.push('cardAdd')">
      <v-icon>mdi-check</v-icon>
      <label>등록 완료하기</label>
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.cardAdd {
  padding: 26px;
  padding-top: 0px;

  .page-title {
    h2 {
      font-weight: bold;
    }
    p {
      margin-top: 10px;
      color: #888;
    }
  }

  .form {
    margin-top: 30px;

    p{
      margin-top:10px;
      font-size:12px;
      color:#888;
    }

    dl {
      margin-bottom: 10px;
      dt {
        font-size: 12px;
      }
      dd {
        display: flex;
      }
    }

    .type_btns {
      display: flex;
      align-items: flex-end;

      dl {
        width: 100%;
      }

      dd {
        width: 100%;

        .v-item-group {
          display: flex;
          width: 100%;
          border-radius:4px;
          overflow: hidden;
          flex: 1;
          border: 1px solid #c2c2c2;
        }

        .v-btn {
          flex: 1;
          border: 0px;
          height: 40px;
          border-radius: 0px;
        }

        .v-btn:last-child {
          margin-right: 0px;
        }
      }
    }
  }

  .finishBtn {
    width: 100%;
    height: 50px;
    border: 1px solid #c2c2c2;
    border-radius: 10px;
    margin-top: 40px;

    .v-icon {
      font-size: 18px;
      color: #0ca0e2;
      margin-right: 10px;
    }
    label {
      font-size: 14px;
    }
  }
}
</style>
