<template>
  <div>
    <h1 class="mb-6">Still have questions?</h1>
    <div class="mb-6">
      <v-row>
        <v-col col="12" sm="12" md="6">
          <v-tabs direction="vertical" v-model="tab" color="primary">
            <v-tab value="FAQ">
              Truckpedia Frequently Asked Questions (FAQ)
            </v-tab>
            <v-tab value="option-2"> Billing </v-tab>
            <v-tab value="claims"> Claims </v-tab>
            <v-tab value="disputes"> Disputes </v-tab>
            <v-tab value="truckpedia-platform"> Truckpedia Platform </v-tab>
            <v-tab value="shipping"> Shipping </v-tab>
            <v-tab value="tracking"> Tracking </v-tab>
          </v-tabs>
        </v-col>
        <v-col col="12" sm="12" md="6">
          <v-window v-model="tab">
            <v-window-item value="FAQ">
              <FaqGeneral />
            </v-window-item>
            <v-window-item value="option-2">
              <v-expansion-panels elevation-0>
                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    How will I receive my invoice?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    Truckpedia can email your invoice to any email address, or
                    you can find it inside Truckpedia Portal
                  </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    When will I receive my invoice?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    You should receive your invoice instantly after the load has
                    been delivered. Because we require all carriers to use our
                    technology, all necessary documents will be uploaded in
                    real-time.
                  </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    Can I bill another party?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    We do not bill third parties, but we do accept payments from
                    third parties.
                  </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    How can I pay my bill?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    Online in your Portal ( ACH or Check only) Visit our billing
                    for instructions and information about online payment
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    Can I set up automatic payments?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    Yes! When clients make online payments via our portal
                    (credit card or ACH only), we allow autopay options such as
                    “Pay on invoice date” or “Pay on invoice due date.”
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    How can I view my statement?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    Log into Truckpedia portal. Click on Load Invoices and you
                    can access all invoices and details of each load.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    What is my credit limit? How do I increase my credit limit?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    We require that customers complete credit applications
                    during onboarding, which is when credit limits are
                    determined. To request a credit limit increase, simply
                    download and complete the credit application form and email
                    it to
                    <a href="mailto:credit@truckpedia.io" target="_blank"
                      >credit@truckpedia.io</a
                    >. We’ll review your application and get back to you
                    promptly!
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    How long does it take for my payment to process?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    That depends on which method you choose when making your
                    payment.
                    <br />
                    • Online via our portal: <br />
                    &nbsp; ◦ ACH payments: 3-5 business days <br />
                    &nbsp; ◦ Check payments: 3-5 business days
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    My account is on hold. What can I do?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    The most common reason for an account to be on hold is an
                    outstanding balance that’s past due. Therefore, the fastest
                    way to remove a hold is to make an immediate payment of your
                    past-due balances via our online payment system in your
                    portal. If your account is paid in full but remains on hold,
                    please contact us at
                    <a href="mailto:support@truckpedia.io" target="_blank"
                      >support@truckpedia.io</a
                    >
                    so that we can investigate and resolve the issue.
                    Alternatively, if your account is on hold because you have
                    reached your credit limit, please reach out to your Account
                    Manager for assistance.
                  </v-expansion-panel-text>
                </v-expansion-panel>
                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    What are your credit terms?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    We will invoice you with Net 30 terms after your freight
                    shipment is delivered safe and sound to its destination.
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-window-item>
            <v-window-item value="claims">
              <v-expansion-panels elevation-0>
                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    How do I file a claim for a damaged or lost shipment?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    We’re very sorry that you’ve experienced an issue with your
                    shipment. We’ll work hard to make it right. If your shipment
                    was damaged or lost, complete the claims form through this
                    form. Once we’ve received your claim, a member of our claims
                    support team will reach out to you with the next steps. If
                    you have any further questions, please reach out to
                    <a href="mailto:claims@truckpedia.io"
                      >claims@truckpedia.io</a
                    >
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    How long does it take for me to get paid on my cargo claim?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    In the unfortunate event that you have a claim, Truckpedia
                    will assist you in facilitating the process with the
                    carrier. Claims rules and regulations are governed by
                    federal law under the Carmack Amendment and vary based on
                    any outside agreements in place. Typically, claims resolve
                    within 120 days after the carrier acknowledges receipt of a
                    claim. Resolution could include full payment of your claim,
                    an offer to settle the claim for a lower amount, or
                    potentially declination of your claim if the carrier finds
                    the claim submission to be invalid. In any situation, we
                    strive to provide you with a smooth claims submittal process
                    and consistent communication on the status of your claim.
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-window-item>
            <v-window-item value="disputes">
              <v-expansion-panels elevation-0>
                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    How do I dispute an additional charge?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    Feel that a charge isn’t valid? You can contact the carrier
                    directly to dispute the fee directly through our online
                    Portal. If you still can’t come to an agreement, fill out
                    the disputes form on our disputes information page to get
                    started.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    I paid my invoice. Why am I getting a past-due notice?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    Great question — and we’ll get to the bottom of it for you.
                    Please email
                    <a href="mailto:ar@truckpedia.io">ar@truckpedia.io</a> with
                    the following information:<br />
                    • Load reference # <br />
                    • Payment method (check/ACH/wire) <br />
                    • Date of payment submission <br />
                    • Payment amount <br />
                    • Remittance detail <br />
                    We’ll investigate the issue and get back to you with more
                    information.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    What are the most common additional charges?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    Below are the most common additional charges for LTL
                    shipments and what they mean: <br />
                    • Re-weigh – When a shipment weighs more than what was
                    quoted for or listed on the BOL. <br />
                    • Re-class – When a shipment moves at a different freight
                    class than what was quoted for or listed on the BOL. <br />
                    • Residential – When an address is zoned as a residence. If
                    your home-based business is in a residential area, it is
                    considered a residence. <br />
                    • Accessorial fees – When a shipment requires additional
                    services that were not quoted for or listed on the BOL.
                    Typical accessorial fees include liftgate services,
                    notification calls, inside pickup or delivery, and more.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    Why doesn’t my invoice match what I was quoted?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    This could happen for a few different reasons. It’s possible
                    that there was an additional charge for a service or change
                    in shipment details. It’s also possible the shipment was
                    booked after the original quote expired. If neither of these
                    scenarios is applicable to you, visit our disputes
                    information page to learn more about filing disputes for a
                    Truckpedia shipment.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    Will the carrier invoice my company directly?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    No, all payments would be processed through the Truckpedia
                    platform.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    Why is there an extra charge on my invoice?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    Generally, extra charges occur when the carrier provides
                    additional services during shipment that weren’t included in
                    the original quote. This can happen for a variety of
                    reasons. Visit our disputes information page to learn more
                    about your additional charge(s).
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-window-item>
            <v-window-item value="truckpedia-platform">
              <v-expansion-panels elevation-0>
                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    How do I get a freight quote in the Truckpedia Platform?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    Simply go on Truckpedia's “marketplace” and put in your
                    shipment details. You do not need to create an account to
                    get a quote.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    How do I book a freight shipment in the Truckpedia Platform?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    To book (or order) a freight shipment: <br />
                    • Login to the Truckpedia Platform if you’ve already
                    registered with us, or visit the account sign-up page to
                    easily request that a sales representative open an account
                    for you. <br />
                    • Input your freight shipment details on the “marketplace”
                    page and click “Submit” to receive an instant quote. <br />
                    • Select the carrier you’d like to work with. <br />
                    • Once you’ve chosen a shipping carrier, click “Accept” to
                    book your shipment. You’re ready to go!
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-window-item>
            <v-window-item value="shipping">
              <v-expansion-panels elevation-0>
                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    How does Truckpedia source trucks?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    All qualified carriers are welcome to register an account
                    with us. Truckpedia will go through a detailed screening and
                    vetting process to approve satisfactory carriers. All
                    carriers must be equipped with ELD that integrates with
                    Truckpedia for real-time tracking and we request all
                    carriers to have a modern TMS for instant updates, real-time
                    visibility, and fast responses. We screen, vet, and
                    routinely audit our carrier partners to ensure we
                    consistently provide the best possible service to our
                    customers.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    What and where can Truckpedia ship?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    Truckpedia specializes in shipping business-to-business
                    freight (dock to dock) across the continental United States.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    Why does Truckpedia give me multiple freight quotes on each
                    shipment?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    The quotes don’t come from us. They come from carriers
                    directly, so you can actually pick who you’d like to work
                    with.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    How far in advance should I book my shipments?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    You can book as far as we have carriers sharing their
                    capacities! However, it is normally cheaper if you can book
                    3-5 days in advance.
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-window-item>
            <v-window-item value="tracking">
              <v-expansion-panels elevation-0>
                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    How do I track my order?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    To track your shipment, simply log into Truckpedia and find
                    the shipment you want to track. Click the “Tracking” tab.
                    Follow your shipment from order confirmation all the way to
                    delivery.
                  </v-expansion-panel-text>
                </v-expansion-panel>

                <v-expansion-panel class="mb-6">
                  <v-expansion-panel-title expand-icon="mdi-menu-down">
                    Can I send the receiver a tracking link so they can track an
                    inbound shipment?
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    When booking a shipment in Truckpedia, you will have the
                    option to enter the receiver’s email address so they can
                    track an inbound shipment. Truckpedia will send an email
                    notification to the receiver as soon as the carrier picks up
                    the shipment. <br />
                    Inside the notification email, receivers can click the ‘View
                    and Track Shipment’ button to navigate to a receiver
                    tracking page. There, the receiver will have limited,
                    read-only access to the shipment details and tracking
                    information. Receivers can continue to check this link
                    throughout the shipment’s journey for delivery status
                    updates.
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import FaqGeneral from "./FaqGeneral.vue";

export default {
  name: "FaqTabs",
  components: {
    FaqGeneral,
  },
  data() {
    return {
      tab: "option-1",
      panel: [0],
      readonly: false,
    };
  },
};
</script>

<style scoped>
::v-deep(.v-btn__content) {
  font-size: 1rem;
  font-weight: 700;
  text-transform: capitalize;
}
.v-expansion-panel__shadow {
  display: none !important;
}

::v-deep(.v-expansion-panel-title) {
  font-size: 1.1rem;
}
</style>
