# Prisma Backend API

Bu layihə Express.js və Prisma ORM istifadə edərək hazırlanmış backend API-dir. Browser extension üçün backend xidmətləri təqdim edir.

## 🚀 Texnologiyalar

- **Node.js** - Runtime environment
- **Express.js 5.1.0** - Web framework
- **Prisma 6.14.0** - ORM (Object-Relational Mapping)
- **TypeScript 5.9.2** - Type safety
- **SQLite** - Database
- **Multer** - File upload handling
- **Cloudinary** - Cloud image storage

## 📁 Layihə Strukturu

```
prisma/
├── src/                    # Əsas mənbə kodları
├── prisma/                 # Prisma konfiqurasiyası
│   ├── schema.prisma       # Database schema
│   ├── dev.db             # SQLite database
│   └── migrations/        # Database migrations
├── routes/                 # API routes
├── controller/            # Route controllers
├── lib/                   # Utility functions
├── upload/                # Upload handling
├── generated/             # Generated Prisma client
├── node_modules/          # Dependencies
├── package.json           # Layihə konfiqurasiyası
├── tsconfig.json          # TypeScript konfiqurasiyası
├── prisma.ts              # Prisma client export
└── prisma.js              # Prisma client export (JS)
```

## 🛠️ Quraşdırma

1. **Dependencies quraşdırın:**
   ```bash
   npm install
   ```

2. **Database migration:**
   ```bash
   npx prisma migrate dev
   ```

3. **Prisma client generate:**
   ```bash
   npx prisma generate
   ```

4. **Development server başladın:**
   ```bash
   npm run dev
   ```

5. **Production build:**
   ```bash
   npm run build
   ```

6. **Production server başladın:**
   ```bash
   npm start
   ```

## 📜 Mövcud Scriptlər

- `npm run dev` - Development server (ts-node-dev ilə)
- `npm run build` - TypeScript compilation
- `npm run start` - Production server

## 🗄️ Database Schema

### Extension Model
```prisma
model Extension {
  id          String  @id @default(cuid())
  name        String  @unique
  description String
  isActive    Boolean @default(false)
  logo        String?
}
```

### Database Konfiqurasiyası
- **Provider**: SQLite
- **Database**: `dev.db`
- **Client Output**: `../generated/prisma`

## 🔧 Konfiqurasiya

### Environment Variables
`.env` faylında aşağıdakı dəyişənlər tələb olunur:
```env
DATABASE_URL="file:./dev.db"
```

### TypeScript
Layihə TypeScript 5.9.2 istifadə edir və `tsconfig.json` faylında konfiqurasiya edilib.

### Prisma
Prisma 6.14.0 istifadə olunur və `prisma/schema.prisma` faylında konfiqurasiya edilib.

## 📦 Əsas Dependencies

### Production Dependencies
- `express`: ^5.1.0
- `@prisma/client`: ^6.14.0
- `cloudinary`: ^2.7.0
- `multer`: ^2.0.2

### Development Dependencies
- `prisma`: ^6.14.0
- `typescript`: ^5.9.2
- `ts-node-dev`: ^2.0.0
- `@types/express`: ^5.0.3
- `@types/multer`: ^2.0.0
- `@types/node`: ^24.3.0

## 🌐 API Endpoints

Layihə Express.js router istifadə edərək API endpoint-ləri təqdim edir. Əsas endpoint-lər `routes/` qovluğunda yerləşir.

## 📁 Fayl Yükləmə

Layihə Multer istifadə edərək fayl yükləmə funksionallığı təqdim edir və Cloudinary ilə inteqrasiya edilib.

## 🔍 Prisma Client

Prisma client `generated/prisma` qovluğunda yerləşir və `prisma.ts` faylında export edilib.

## 📝 Qeydlər

- SQLite database development üçün istifadə olunur
- Prisma client avtomatik olaraq generate edilir
- TypeScript tam dəstəklənir
- File upload Cloudinary ilə inteqrasiya edilib
- Hot reload development zamanı mövcuddur

## 🚀 Deployment

Production deployment üçün:
1. `npm run build` - TypeScript kompilyasiyası
2. `npm start` - Production server başlatma
3. Environment variables konfiqurasiya etmək
4. Database migration-ləri tətbiq etmək
