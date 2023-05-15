# eslint-plugin-no-assignment-in-if

eslint-plugin-no-assignment-in-if

## Why

Assignement in `if` is an easy mistake to make, and a hard bug to find.

### Example

```ts
// ❌ Will error out
if ((myVar = 42)) {
}

// ✅ Will be allowed
if (myVar === 42) {
}
```
