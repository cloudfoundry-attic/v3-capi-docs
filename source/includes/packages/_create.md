## Create a Package

```
Definition
```

```http
POST /v3/apps/:guid/packages HTTP/1.1
```

```
Example Request
```

```shell
curl "https://api.[your-domain.com]/v3/apps/[guid]]/packages"
  -X POST
  -H "Authorization: bearer [token]"
  -H "Host: [host.com]"
  -H "Content-Type: application/x-www-form-urlencoded"
  -H "Cookie: "
  -d '{
    "type": "docker",
    "data": {
      "image": "registry/image:latest"
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
  "guid": "4cb65058-f04f-458f-aca1-5f4e43de6407",
  "type": "docker",
  "data": {
    "hash": {
      "type": "sha1",
      "value": null
    },
    "error": null,
    "image": "registry/image:latest"
  },
  "state": "READY",
  "created_at": "2015-11-03T00:53:54Z",
  "updated_at": null,
  "links":
  {
    "self": {
      "href": "/v3/packages/4cb65058-f04f-458f-aca1-5f4e43de6407"
    },
    "app": {
      "href": "/v3/apps/d8b8148d-5798-44de-821a-64b85b15e968"
    }
  }
}
```

This endpoint creates a new package.

### Body Parameters

<ul class="method-list-group">
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      type

      <span class="method-list-item-type method-list-item-type-required">required</span>
    </h4>

    <p class="method-list-item-description">Package type. Possible values are "bits", "docker".</p>
  </li>
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      data

      <span class="method-list-item-type">optional</span>
    </h4>

    <p class="method-list-item-description">Data for docker packages. Can be empty for bits packages.</p>
  </li>
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      data['image']

      <span class="method-list-item-type">optional</span>
    </h4>

    <p class="method-list-item-description">Location of docker image. Required for docker packages.</p>
  </li>
</ul>
