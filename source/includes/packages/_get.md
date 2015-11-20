## Get a Package

```
Definition
```

```http
GET /v3/packages/guid-44f7c078-0934-470f-9883-4fcddc5b8f13 HTTP/1.1
```

```
Command
```

```shell
$ curl "https://api.[your-domain.com]/v3/packages/guid-44f7c078-0934-470f-9883-4fcddc5b8f13" -X GET \
 	-H "Authorization: bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidWFhLWlkLTQ2MCIsImVtYWlsIjoiZW1haWwtMzI3QHNvbWVkb21haW4uY29tIiwic2NvcGUiOlsiY2xvdWRfY29udHJvbGxlci5yZWFkIiwiY2xvdWRfY29udHJvbGxlci53cml0ZSJdLCJhdWQiOlsiY2xvdWRfY29udHJvbGxlciJdLCJleHAiOjE0NDgwMzg5NzZ9.vtT67q5GwHPbxQc17QzjK5l_ZofuXl-ABTFrxO5N-x0" \
 	-H "Host: example.org" \
 	-H "Cookie: "
```

```
Example Request
```

```http
GET /v3/packages/guid-44f7c078-0934-470f-9883-4fcddc5b8f13 HTTP/1.1
Authorization: bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidWFhLWlkLTQ2MCIsImVtYWlsIjoiZW1haWwtMzI3QHNvbWVkb21haW4uY29tIiwic2NvcGUiOlsiY2xvdWRfY29udHJvbGxlci5yZWFkIiwiY2xvdWRfY29udHJvbGxlci53cml0ZSJdLCJhdWQiOlsiY2xvdWRfY29udHJvbGxlciJdLCJleHAiOjE0NDgwMzg5NzZ9.vtT67q5GwHPbxQc17QzjK5l_ZofuXl-ABTFrxO5N-x0
Host: example.org
Cookie:
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
```

```json
{
  "guid": "guid-44f7c078-0934-470f-9883-4fcddc5b8f13",
  "type": "bits",
  "data": {
    "hash": {
      "type": "sha1",
      "value": null
    },
    "error": null
  },
  "state": "AWAITING_UPLOAD",
  "created_at": "2015-11-13T17:02:56Z",
  "updated_at": null,
  "links": {
    "self": {
      "href": "/v3/packages/guid-44f7c078-0934-470f-9883-4fcddc5b8f13"
    },
    "upload": {
      "href": "/v3/packages/guid-44f7c078-0934-470f-9883-4fcddc5b8f13/upload",
      "method": "POST"
    },
    "download": {
      "href": "/v3/packages/guid-44f7c078-0934-470f-9883-4fcddc5b8f13/download",
      "method": "GET"
    },
    "stage": {
      "href": "/v3/packages/guid-44f7c078-0934-470f-9883-4fcddc5b8f13/droplets",
      "method": "POST"
    },
    "app": {
      "href": "/v3/apps/guid-1d3bf0ec-5806-43c4-b64e-8364dba1086a"
    }
  }
}
```

This endpoint retrieves a specific package.


### Query Parameters

N/A



