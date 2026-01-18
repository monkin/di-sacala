# di-sacala

Small type-safe dependency injection lib

## Development

### Installation

```bash
npm install
```

### Build

```bash
npm run build
```

### Test

```bash
npm test
npm run test:watch  # Watch mode
```

### Linting & Formatting

```bash
npm run lint          # Run ESLint
npm run format        # Format code with Prettier
npm run format:check  # Check code formatting
```

## Usage

```typescript
import { hello } from 'di-sacala';

console.log(hello());           // Hello, World!
console.log(hello('TypeScript')); // Hello, TypeScript!
```

