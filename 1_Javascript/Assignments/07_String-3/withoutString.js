function withoutString(base, remove) {
  let res = base;
  res = rem(res, remove);
  res = rem(res, remove.toLowerCase());
  res = rem(res, remove.toUpperCase());
  return res;
}

function rem(base, remove) {
  let res = "";
  let arr = base.split(remove);
  for (const it of arr) {
    res += it;
  }
  return res;
}
