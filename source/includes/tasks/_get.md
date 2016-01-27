## Get a Task

```
Definition
```

```http
GET /v3/tasks/:guid HTTP/1.1
```

```
Example Request
```

```shell
$ curl "https://api.[your-domain.com]/v3/tasks/[guid]" -X GET \
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
  "guid": "029f82e8-9f16-4b7e-a1c3-1c80fb1174d3",
  "name": "task",
  "command": "echo foo",
  "state": "RUNNING",
  "result": {
    "message": null
  },
  "links": {
    "self": {
      "href": "/v3/tasks/029f82e8-9f16-4b7e-a1c3-1c80fb1174d3"
    },
    "app": {
      "href": "/v3/apps/ae32849e-6f2d-4db9-8771-ac1883a70b9b"
    },
    "droplet": {
      "href": "/v3/droplets/35deb1cc-8c5a-4791-8ef5-01b214030b48"
    }
  }
}
```

This endpoint retrieves a specific task. A task can have states `RUNNING`, `SUCCEEDED`, and `FAILED`.
When a task's state is `FAILED`, the failure reason will be in the `result.message` field.

### Body Parameters

<p class='no-body-parameters-outer'>
  <span class='no-body-parameters-required'>
    No arguments
  </span>
</p>
