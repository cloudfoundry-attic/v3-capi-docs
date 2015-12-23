## Get a Package

```
Definition
```

```http
GET /v3/packages/:guid HTTP/1.1
```

```
Example Request
```

```shell
$ curl "https://api.[your-domain.com]/v3/packages/[guid]" -X GET \
 	-H "Authorization: bearer [token]" \
 	-H "Host: [host.com]" \
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
  "guid": "44f7c078-0934-470f-9883-4fcddc5b8f13",
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
      "href": "/v3/packages/44f7c078-0934-470f-9883-4fcddc5b8f13"
    },
    "upload": {
      "href": "/v3/packages/44f7c078-0934-470f-9883-4fcddc5b8f13/upload",
      "method": "POST"
    },
    "download": {
      "href": "/v3/packages/44f7c078-0934-470f-9883-4fcddc5b8f13/download",
      "method": "GET"
    },
    "stage": {
      "href": "/v3/packages/44f7c078-0934-470f-9883-4fcddc5b8f13/droplets",
      "method": "POST"
    },
    "app": {
      "href": "/v3/apps/1d3bf0ec-5806-43c4-b64e-8364dba1086a"
    }
  }
}
```

This endpoint retrieves a specific package.

### Body Parameters

<p class='no-body-parameters-outer'>
  <span class='no-body-parameters-required'>
    No arguments
  </span>
</p>
