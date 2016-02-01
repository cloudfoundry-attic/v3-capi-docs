<div class='no-margin'></div>

## The task object

<ul class="method-list-group">
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      guid
      <span class="method-list-item-type">string</span>
    </h4>

    <p class="method-list-item-description">Unique GUID for the task</p>
  </li>
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      name
      <span class="method-list-item-type">string</span>
    </h4>

    <p class="method-list-item-description">User-facing name of the task.</p>
  </li>
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      command
      <span class="method-list-item-type">string</span>
    </h4>

    <p class="method-list-item-description">Command that will be executed</p>
  </li>
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      memory_in_mb
      <span class="method-list-item-type">integer</span>
    </h4>

    <p class="method-list-item-description">Maximum memory for the task in MB.</p>
  </li>
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      state
      <span class="method-list-item-type">string</span>
    </h4>

    <p class="method-list-item-description">State of the task. Possible states are "RUNNING"</p>
  </li>
  <li class="method-list-item">
      <h4 class="method-list-item-label">
        result
        <span class="method-list-item-type">object</span>
      </h4>

      <p class="method-list-item-description">Results from the task</p>
  </li>
  <li class="method-list-item">
      <h4 class="method-list-item-label">
        result[message]
        <span class="method-list-item-type">string</span>
      </h4>

      <p class="method-list-item-description">Always null</p>
  </li>
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      created_at
      <span class="method-list-item-type">datetime</span>
    </h4>

    <p class="method-list-item-description">The time with zone when the task was created.</p>
  </li>
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      updated_at
      <span class="method-list-item-type">datetime</span>
    </h4>

    <p class="method-list-item-description">The time with zone with the task was last updated.</p>
  </li>
  <li class="method-list-item">
    <h4 class="method-list-item-label">
      links
      <span class="method-list-item-type">object</span>
    </h4>

    <p class="method-list-item-description">Links to related resources.</p>
  </li>
</ul>
