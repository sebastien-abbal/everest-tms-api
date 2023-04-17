# Welcome to everest-tms-api

This is a powerful [Node.js](https://nodejs.org/) package that allows you to easily interact with the [TMS Everest](https://geteverest.io/). This package has been created by [COGEPART GROUP](https://bycogepart.fr/) and available for open-source development.
You are authorized to fork and participate to the package evolution.

# 🚀 Get started

#### Installation

```
$ npm install everest-tms-api
// or
$ yarn add everest-tms-api
```

#### Code

```typescript
import { EverestApi } from 'everest-tms-api';

const api = new EverestApi({
  endpoint: process.env.API_ENDPOINT_URL,
  client_id: process.env.API_CLIENT_ID,
  client_secret: process.env.API_CLIENT_SECRET,
});

api.authenticate().then(async () => {
  const result = await api.getInfos();
  console.log(result);
});
```

# 👾 Usage

This all package is based on the [Everest API documentation](https://sandbox.everst.io/api/documentation?full=true).
| Type | Enabled |
| ---------------- | :-----: |
| General routes | ✅ |
| Missions routes | ✅ |
| Clients routes | ✅ |
| Agents routes | ✅ |
| Invoices routes | ✅ |
| Contacts routes | ✅ |
| Models | ✅ |
| Webhooks | ✅ |

---

#### Configuration

When you invoke the `EverestApi` class, who have to give some parameters from your Everest API:

- **endpoint**: `"https://[company].everst.io/api"` (type: string. You can find it from your everest dashboard on uri `/admin/api`)
- **client_id**: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" (type: string. You can find it from your everest dashboard on uri `/admin/api`)
- **client_secret**: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" (type: string. You can find it from your everest dashboard on uri `/admin/api`)
- **timeout**: 10000 (type: number. `timeout` is in milliseconds, 10000 is 10s)

#### Module

Import the class `EverestApi` from the package and run it with your configuration.

```typescript
import { EverestApi } from 'everest-tms-api';

const api = new EverestApi({
  endpoint: process.env.API_ENDPOINT_URL,
  client_id: process.env.API_CLIENT_ID,
  client_secret: process.env.API_CLIENT_SECRET,
});
```

Now, you have to authenticate yourself with this line:

```typescript
const api = new EverestApi({...});
await api.authenticate();
```

Then, you can call the route you want from the `api` class module initialized and authenticated.

#### Example

For example, if we want to create a new agent, we need to do that (from an async function (Promise)):

```typescript
const api = new EverestApi({...});
await api.authenticate();
await api.createAgent({
    email: `leon-lefebvre@example.com`,
    first_name: 'Léon',
    last_name: 'LEFEBVRE',
    password: "#abcdefg&123456789!",
    password_repeat: "#abcdefg&123456789!",
    address_line1: '1 Example road, London, UK',
})
```

#### Webhooks

For `Hooks`, types has been created based on the [Everest API documentation](https://sandbox.everst.io/api/documentation?full=true), you can import them from the library like this:

```typescript
import { IEverestHook } from 'everest-tms-api';

const result = '{from webhook [agent_deleted]}' as IEverestHook;

switch (result.event) {
  case HookEnum.agent_deleted:
    console.log(result.agent_id);
    break;
  case HookEnum.agent_created:
    console.log(result.available);
    break;
  default:
    console.log('Webhook not recognized');
}
```

> ⚠️ `WARNING: BE CAREFUL ENUMS FROM STATUS / TYPES!`. Some values like status or types are not based on enums defined in the queries/mutations typed in this library due to default API REST from Everest. You can use the index enum if you want to avoid that (like the example below).

```typescript
import { IEverestHook } from 'everest-tms-api';

const result = '{from webhook [invoice_created]}';
const type = result.type; // In this example, type is equal to 1 (INVOICE)
return Object.values(EverestInvoiceTypeEnum)[
  result.type
] as EverestInvoiceTypeEnum;
```

---

# 🚦 Tests

First, run the `yarn` command from the root of this project, and add a `.env` file:

```
NODE_ENV="dev"
API_ENDPOINT_URL="https://[company].everst.io/api"
API_CLIENT_ID="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
API_CLIENT_SECRET="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

> ⚠️ `WARNING: MAKE SURE YOU ARE IN PREPROD / DEV ENVIRONMENT!`. Tests will create some resources on your environment, don't run tests on prod and prefer use tests on a sandbox env !

Then test all the app with jest (100% coverage), you need to run this command line:

```
$ yarn test
```

## License

This package is [MIT licensed](LICENSE.md).
