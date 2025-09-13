import { Migration } from '@mikro-orm/migrations'

export class Migration20250730120000 extends Migration {
  override async up(): Promise<void> {
    this.addSql(`create table if not exists "tenant" (
      "id" text not null,
      "owner_id" text not null,
      "subdomain" text not null,
      "metadata" jsonb null,
      "created_at" timestamptz not null default now(),
      "updated_at" timestamptz not null default now(),
      "deleted_at" timestamptz null,
      constraint "tenant_pkey" primary key ("id"),
      constraint "tenant_subdomain_unique" unique ("subdomain")
    );`)
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_tenant_deleted_at" ON "tenant" (deleted_at) WHERE deleted_at IS NULL;`)
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "tenant" cascade;`)
  }
}
