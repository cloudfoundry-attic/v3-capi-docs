## List Tasks

```
Definition
```

```http
GET /v3/tasks HTTP/1.1
```

```
Example Request
```

```shell
$ curl "https://api.[your-domain.com]/v3/tasks" -X GET \
 	-H "Authorization: bearer [token]" \
 	-H "Host: [host.com]" \
 	-H "Cookie: "
```

```
Example Response
```

```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
   "pagination": {
      "total_results": 3,
      "first": {
         "href": "/v3/tasks?page=1&per_page=2"
      },
      "last": {
         "href": "/v3/tasks?page=2&per_page=2"
      },
      "next": {
         "href": "/v3/tasks?page=2&per_page=2"
      },
      "previous": null
   },
   "resources": [
      {
         "guid": "a22ecb57-fb37-4541-856f-21dce1b3e779",
         "name": "task-1",
         "command": "rake db:migrate && true",
         "state": "RUNNING",
         "result": {
            "message": null
         },
         "environment_variables": {},
         "links": {
            "self": {
               "href": "/v3/tasks/a22ecb57-fb37-4541-856f-21dce1b3e779"
            },
            "app": {
               "href": "/v3/apps/b82d8d29-ffaa-4975-911e-c91f5aecf33c"
            },
            "droplet": {
               "href": "/v3/droplets/17dbcb39-eca8-41f1-ac9b-432bb3bbd2e1"
            }
         }
      },
      {
         "guid": "4b77b52d-b298-4930-84fc-bcf6d87e315a",
         "name": "task-2",
         "command": "rake db:migrate && true",
         "state": "RUNNING",
         "result": {
            "message": null
         },
         "environment_variables": {},
         "links": {
            "self": {
               "href": "/v3/tasks/4b77b52d-b298-4930-84fc-bcf6d87e315a"
            },
            "app": {
               "href": "/v3/apps/b82d8d29-ffaa-4975-911e-c91f5aecf33c"
            },
            "droplet": {
               "href": "/v3/droplets/17dbcb39-eca8-41f1-ac9b-432bb3bbd2e1"
            }
         }
      }
   ]
}
```

This endpoint retrieves the tasks the user has access to.

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
