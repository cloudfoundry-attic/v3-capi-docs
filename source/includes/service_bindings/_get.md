## Get a Service Binding

```
Definition
```

```http
GET /v3/service_bindings/:guid HTTP/1.1
```

```
Example Request
```

```shell
$ curl "https://api.[your-domain.com]/v3/service_bindings/[guid]" -X GET
 	-H "Authorization: bearer [token]"
 	-H "Host: [host.com]"
 	-H "Cookie: "
```

```
Example Response
```

```http
HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Content-Type: application/json; charset=utf-8
X-Runtime: 0.014007
Content-Length: 840

{
  "guid": "dde5ad2a-d8f4-44dc-a56f-0452d744f1c3",
  "type": "app",
  "data": {
    "credentials": {
      "super-secret": "password"
    },
    "syslog_drain_url": "syslog://drain.url.com"
  },
  "created_at": "2015-11-13T17:02:56Z",
  "updated_at": null,
  "links": {
    "self": {
      "href": "/v3/service_bindings/dde5ad2a-d8f4-44dc-a56f-0452d744f1c3"
    },
    "service_instance": {
      "href": "/v3/service_instances/8bfe4c1b-9e18-45b1-83be-124163f31f9e"
    },
    "app": {
      "href": "/v3/apps/74f7c078-0934-470f-9883-4fddss5b8f13"
    }
  }
}
```

This endpoint retrieves a specific service binding.

### Body Parameters

<p class='no-body-parameters-outer'>
  <span class='no-body-parameters-required'>
    No arguments
  </span>
</p>
