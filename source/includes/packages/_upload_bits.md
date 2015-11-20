## Upload Bits for a Package of Type 'Bits'

```
Definition
```

```http
POST /v3/packages/:guid/upload HTTP/1.1
```

```
Command
```

```shell
curl "https://api.[your-domain.com]/v3/packages/[guid]/upload" \
  -d '[body_parameters]' \
  -X POST \
  -H "Authorization: bearer [token]" \
  -H "Host: [host.com]" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -H "Cookie: "
```

```
Example Request
```

```http
POST /v3/packages/a910e72b-5483-4b21-b36a-21997b2d1f39/upload HTTP/1.1
Authorization: bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidWFhLWlkLTQ1NyIsImVtYWlsIjoiZW1haWwtMzI0QHNvbWVkb21haW4uY29tIiwic2NvcGUiOlsiY2xvdWRfY29udHJvbGxlci5yZWFkIiwiY2xvdWRfY29udHJvbGxlci53cml0ZSJdLCJhdWQiOlsiY2xvdWRfY29udHJvbGxlciJdLCJleHAiOjE0NDgwMzg5NzZ9.JFF0J6G3YJTGfWiwzAR6nPJcRdgRqDc4_e44b_Z5QVw
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

bits_name=application.zip&bits_path=%2Ftmp%2Fd20151113-23102-6lnfn2%2Fapplication.zip
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
X-Runtime: 0.025308
Content-Length: 860

{
  "guid": "a910e72b-5483-4b21-b36a-21997b2d1f39",
  "type": "bits",
  "data":
  {
    "hash":
    {
      "type": "sha1",
      "value": null
    },
    "error": null
  },
  "state": "PROCESSING_UPLOAD",
  "created_at": "2015-11-13T17:02:56Z",
  "updated_at": "2015-11-13T17:02:56Z",
  "links":
  {
    "self":
    {
      "href": "/v3/packages/a910e72b-5483-4b21-b36a-21997b2d1f39"
    },
    "upload":
    {
      "href": "/v3/packages/a910e72b-5483-4b21-b36a-21997b2d1f39/upload",
      "method": "POST"
    },
    "download":
    {
      "href": "/v3/packages/a910e72b-5483-4b21-b36a-21997b2d1f39/download",
      "method": "GET"
    },
    "stage":
    {
      "href": "/v3/packages/a910e72b-5483-4b21-b36a-21997b2d1f39/droplets",
      "method": "POST"
    },
    "app":
    {
      "href": "/v3/apps/104b5af3-7948-4212-ae49-9ef094cb212f"
    }
  }
}
```

This endpoint uploads bits to an existing package of type 'bits'.

### Query Parameters

Name | Description | Valid Values | Example Values
--------- | ----------- | --------------| -------------
bits (*) | A binary zip file containing the package bits | |
