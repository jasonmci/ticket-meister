-- CreateTable
CREATE TABLE "Seat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "section" TEXT NOT NULL,
    "row" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "locationId" INTEGER NOT NULL,
    CONSTRAINT "Seat_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
