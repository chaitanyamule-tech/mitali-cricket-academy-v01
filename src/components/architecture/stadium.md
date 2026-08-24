                         WEBSITE
                            │
                            ▼
                    Booking Form
                            │
                            ▼
                       Validation
                            │
                  ┌─────────┴─────────┐
                  │                   │
             Invalid               Valid
                  │                   │
                  ▼                   ▼
               Reject            Slot Check
                                      │
                              ┌───────┴────────┐
                              │                │
                           Booked          Available
                              │                │
                              ▼                ▼
                           Reject       Create Booking
                                               │
                                               ▼
                                      Generate Booking ID
                                               │
                                               ▼
                                          BOOKINGS
                                               │
                                               ▼
                                            SLOTS
                                               │
                                               ▼
                                      Notification Trigger
                                          /    |    \
                                         /     |     \
                                        ▼      ▼      ▼
                                   Customer  Admin  Ground Staff




                 Notification Trigger
                           │
                    ┌──────┴──────┐
                    │             │
                  Email        WhatsApp





                       WEBSITE
                          │
                          ▼
                        DATE
                          │
                          ▼
                 Availability API
                          │
                  ┌───────┼───────┐
                  ▼       ▼       ▼
               MORNING EVENING   NIGHT
               ₹4,000  ₹10,000  ₹15,000
                  │       │        │
                  └───────┼────────┘
                          ▼
                    Select Session
                          │
                          ▼
                        DETAILS
                          │
                          ▼
                        SUMMARY
                          │
                          ▼
                    Create Booking
                          │
                          ▼
                  PENDING_PAYMENT
                          │
                          ▼
                       RAZORPAY
                          │
                    ┌─────┴─────┐
                    ▼           ▼
                  PAID        FAILED
                    │           │
                    ▼           ▼
               CONFIRMED     RELEASE
                    │
          ┌─────────┼─────────┐
          ▼         ▼         ▼
       Customer    Admin    Ground Staff
         Email     Email       Email
          │
          ▼
        WhatsApp