<template>
  <div>
    <v-row>
      <v-col cols="4">
        <div class="mt-30px">
          <div class="flex flex-col w-full">
            <h3 class="">Select payment method</h3>
            <div class="mt-20px w-full">
              <div class="payment-options">
                <v-chip class="w-full cursor-pointer" color="primary">Credit Card</v-chip>
                <v-chip class="w-full cursor-pointer">Debit Card</v-chip>
                <v-chip class="w-full cursor-pointer">ACH</v-chip>
              </div>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="8">
        <div class="mt-30px">
          <div class="flex flex-col w-full">
            <h3 class="">Pay by Credit Card</h3>
            <div class="mt-20px w-full">
              <label class="text-sm">Card number</label>
              <input class="custom-input" placeholder="Enter card number" />
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Expiration Date</label>
              <div class="flex gap-5px items-center">
                <input class="custom-input" placeholder="Month" />
                <input class="custom-input" placeholder="Year" />
                <input class="custom-input" placeholder="CVV" />
              </div>
            </div>
            <div class="mt-10px w-full">
              <label class="text-sm">Card Holder Name</label>
              <input class="custom-input" placeholder="Card holder name" />
            </div>
            <div class="mt-20px w-full flex flex-col">
              <v-btn class="w-full" color="primary">Pay now</v-btn>
              <v-btn class="mt-10px self-end" variant="flat"> Cancel </v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'PaymentDetails'
}
</script>

<style lang="scss" scoped>
@import '../scss/utility.scss';

.payment-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #f7f7f7;
  padding: 10px;
  height: 100%;
  min-height: 500px;
  border-radius: 10px;
}

// Utility classes
textarea {
  resize: none;
}
</style>
