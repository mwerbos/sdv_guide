// TODO: Use React and stuff for this.
var JSONStorage = {
  set: function (key, value) {
    localStorage[key] = JSON.stringify(value);
  },
  get: function (key) {
    return localStorage[key] ? JSON.parse(localStorage[key]) : null;
  },
};

function getFromStorage(localStoragePath) {
  let toplevel_item = JSONStorage.get(localStoragePath[0]);
  let item = toplevel_item; // shallow copy on purpose.
  let i = 1;
  for (; i < localStoragePath.length; ++i) {
    if (!!!item) break; // If the item doesn't exist, stop traversing.
    item = item[localStoragePath[i]];
  }
  return item;
}

function putInStorage(localStoragePath, value) {
  // NOTE: not sure if I ever need to use bare localStorage instead of
  // JSONStorage.
  if (localStoragePath.length === 1) {
    JSONStorage.set(localStoragePath[0], value);
    return;
  }
  let toplevel_item = JSONStorage.get(localStoragePath[0]);
  if (!!!toplevel_item) {
    toplevel_item = {};
  }
  let item = toplevel_item; // shallow copy on purpose.
  let i = 1;
  for (; i < localStoragePath.length - 1; ++i) {
    if (
      !!!item ||
      !(localStoragePath[i] in item) ||
      !!!item[localStoragePath[i]]
    )
      break;
    item = item[localStoragePath[i]];
  }
  // This loop creates all the nested dicts needed.
  for (; i < localStoragePath.length - 1; ++i) {
    item[localStoragePath[i]] = {};
    item = item[localStoragePath[i]];
  }
  // At the bottom level of nesting, put 'null' as a placeholder for the
  // selected item in the dict.
  // i = localStoragePath.length - 1 (last item)
  item[localStoragePath[i]] = value;
  // Finally save the whole thing back to storage.
  JSONStorage.set(localStoragePath[0], toplevel_item);
}
