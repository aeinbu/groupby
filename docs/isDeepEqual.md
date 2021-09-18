# isDeepEqual
**Syntax**:  
`isDeepEqual(left, right)`

**Arguments**:  
- `left` value to compare.
- `right` value to compare.

**Usage**:
```javascript
const left = { b: { c: 20} }
const right = { b: { c: 20} }

const res = isDeepEqual(left, right)

//Result is true
```

See also:
- [unit tests for isDeepEqual](../tests/isDeepEqual.tests.ts)
