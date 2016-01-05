## Create a Service Binding

```
Definition
```

```http
POST /v3/service_bindings HTTP/1.1
```

```
Example Request
```

```shell
curl "https://api.[your-domain.com]/v3/service_bindings"
  -X POST
 	-H "Authorization: bearer [token]"
 	-H "Host: [host.com]"
 	-H "Content-Type: application/x-www-form-urlencoded"
 	-H "Cookie: "
	-d '{
		"type": "app",
			"relationships": {
				"app": {
					"guid": "74f7c078-0934-470f-9883-4fddss5b8f13"
				},
				"service_instance": {
					"guid": "8bfe4c1b-9e18-45b1-83be-124163f31f9e"
				},
			},
			"data": {
				"parameters": {
					"some_object_id": "for_the_service_broker"
				}
			}
	}'
```

```
Example Response
```

```http
HTTP/1.1 201 Created
Content-Type: application/json;charset=utf-8
X-VCAP-Request-ID: 7237bae0-228e-48be-a074-b6c15491e73f
Content-Length: 695
X-Content-Type-Options: nosniff

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

This endpoint creates a new service binding.

### Body Parameters

<ul class="method-list-group">
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      type

      <span class="method-list-item-type method-list-item-type-required">required</span>
    </h4>

    <p class="method-list-item-description">Service binding type. Currently, the only possible value is "app".</p>
  </li>
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      relationships['app']['guid']

      <span class="method-list-item-type method-list-item-type-required">required</span>
    </h4>

    <p class="method-list-item-description">Guid of the app to which you would like to bind the service instance.</p>
  </li>
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      relationships['service_instance']['guid']

      <span class="method-list-item-type method-list-item-type-required">required</span>
    </h4>

    <p class="method-list-item-description">Guid of the service instance to which you would like to bind the app.</p>
  </li>
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      data['parameters']

      <span class="method-list-item-type">optional</span>
    </h4>

    <p class="method-list-item-description">Additional configuration parameters for the service binding.</p>
  </li>
</ul>
