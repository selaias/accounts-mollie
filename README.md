# accounts-mollie

Login service for Mollie accounts in Meteor

read more at [https://www.meteor.com/accounts] https://www.meteor.com/accounts


Configure Mollie login services. Example:
```
ServiceConfiguration.configurations.remove({
    service: "mollie"
  });

ServiceConfiguration.configurations.upsert(
  { service: "mollie" },
  { $set: { client_id: <your client_id>, secret: <client_secret> } }
);

```

Using any accounts-ui package it will enable the Sign in with Mollie button.
