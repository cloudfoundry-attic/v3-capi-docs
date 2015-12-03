## List all Packages

```
Definition
```

```http
GET /v3/packages HTTP/1.1
```

```
Example Request
```

```shell
curl "https://api.[your-domain.com]/v3/packages?page=[page]&per_page=[per_page]" -X GET \
  -H "Authorization: bearer [token]" \
  -H "Host: [host.com]" \
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
      "href": "/v3/packages?page=1&per_page=2"
    },
    "last": {
      "href": "/v3/packages?page=2&per_page=2"
    },
    "next": {
      "href": "/v3/packages?page=2&per_page=2"
    },
    "previous": null
  },
  "resources": [
    {
      "guid": "a57fd932-85db-483a-a27e-b00efbb3b0a4",
      "type": "bits",
      "data": {
        "hash": {
          "type": "sha1",
          "value": null
        },
        "error": null
      },
      "state": "AWAITING_UPLOAD",
      "created_at": "2015-11-03T00:53:54Z",
      "updated_at": null,
      "links": {
        "self": {
          "href": "/v3/packages/a57fd932-85db-483a-a27e-b00efbb3b0a4"
        },
        "upload": {
          "href": "/v3/packages/a57fd932-85db-483a-a27e-b00efbb3b0a4/upload",
          "method": "POST"
        },
        "download": {
          "href": "/v3/packages/a57fd932-85db-483a-a27e-b00efbb3b0a4/download",
          "method": "GET"
        },
        "stage": {
          "href": "/v3/packages/a57fd932-85db-483a-a27e-b00efbb3b0a4/droplets",
          "method": "POST"
        },
        "app": {
          "href": "/v3/apps/fa3558ce-1c4d-46fc-9776-54b9c8021745"
        }
      }
    },
    {
      "guid": "8f1f294d-cef8-4c11-9f0b-3bcdc0bd2691",
      "type": "docker",
      "data": {
        "hash": {
          "type": "sha1",
          "value": null
        },
        "error": null,
        "image": "http://location-of-image.com",
        "credentials": { },
        "store_image": false
      },
      "state": "READY",
      "created_at": "2015-11-03T00:53:54Z",
      "updated_at": null,
      "links": {
        "self": {
          "href": "/v3/packages/8f1f294d-cef8-4c11-9f0b-3bcdc0bd2691"
        },
        "app": {
          "href": "/v3/apps/fa3558ce-1c4d-46fc-9776-54b9c8021745"
        }
      }
    }
  ]
}
```

This endpoint retrieves all the packages.

### Query Parameters

Name | Description | Valid Values | Example Values
--------- | ------- | ----------- | --------------
page | Page to display | >= 1 | 1
per_page | Number of results per page | 1-5000 | 2
