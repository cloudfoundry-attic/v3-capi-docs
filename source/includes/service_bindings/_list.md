## List Service Bindings

```
Definition
```

```http
GET /v3/service_bindings HTTP/1.1
```

```
Example Request
```

```shell
curl "https://api.[your-domain.com]/v3/service_bindings?page=[page]&per_page=[per_page]" -X GET
  -H "Authorization: bearer [token]"
  -H "Host: [host.com]"
  -H "Cookie: "
```

```
Example Response
```

```http
HTTP/1.1 200 OK
Content-Type: application/json;charset=utf-8
X-VCAP-Request-ID: ab2917b8-b842-4425-aa8f-7c3ff33d9680
Content-Length: 1933
X-Content-Type-Options: nosniff

{
  "pagination": {
    "total_results": 3,
    "first": {
      "href": "/v3/service_bindings?page=1&per_page=2"
    },
    "last": {
      "href": "/v3/service_bindings?page=2&per_page=2"
    },
    "next": {
      "href": "/v3/service_bindings?page=2&per_page=2"
    },
    "previous": null
  },
		"resources": [
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
		},
		{
			"guid": "7aa37bad-6ccb-4ef9-ba48-9ce3a91b2b62",
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
					"href": "/v3/service_bindings/7aa37bad-6ccb-4ef9-ba48-9ce3a91b2b62"
				},
				"service_instance": {
					"href": "/v3/service_instances/8bf356j3-9e18-45b1-3333-124163f31f9e"
				},
				"app": {
					"href": "/v3/apps/74f7c078-0934-470f-9883-4fddss5b8f13"
				}
			}
		}
  ]
}
```

This endpoint retrieves the service bindings the user has access to.

### Body Parameters

<ul class="method-list-group">
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      page

      <span class="method-list-item-type">optional</span>
    </h4>

    <p class="method-list-item-description">Page to display. Possible values are all integers >= 1.</p>
  </li>
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      per_page

      <span class="method-list-item-type">optional</span>
    </h4>

    <p class="method-list-item-description">Number of results per page. Possible values are 1 through 5000.</p>
  </li>
</ul>
