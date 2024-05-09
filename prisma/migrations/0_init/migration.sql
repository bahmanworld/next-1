-- CreateTable
CREATE TABLE "Movie" (
    "xata_id" TEXT NOT NULL DEFAULT ('rec_'::text || (xata_private.xid())::text),
    "xata_version" INTEGER NOT NULL DEFAULT 0,
    "xata_createdat" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "xata_updatedat" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "properties" JSONB,
    "plot" TEXT,
    "year" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "_pgroll_new_Movie_xata_id_key" ON "Movie"("xata_id");

