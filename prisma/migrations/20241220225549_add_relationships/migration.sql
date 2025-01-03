-- CreateTable
CREATE TABLE "Admin" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "adresse" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "comments" INTEGER NOT NULL,
    CONSTRAINT "Blog_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Colis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "DateEnvoi" DATETIME NOT NULL,
    "DescriptionColis" TEXT NOT NULL,
    "HeureReception" DATETIME NOT NULL,
    "NomExpediteur" TEXT NOT NULL,
    "ContactExpediteur" TEXT NOT NULL,
    "AdresseExpediteur" TEXT NOT NULL,
    "NomRecepteur" TEXT NOT NULL,
    "ContactRecepteur" TEXT NOT NULL,
    "AdresseDepart" TEXT NOT NULL,
    "AdresseArrivee" TEXT NOT NULL,
    "PoidColis" TEXT NOT NULL,
    "PrixColis" TEXT NOT NULL,
    "MoyenTransport" TEXT NOT NULL,
    "StatuColis" TEXT NOT NULL,
    "PositionColis" TEXT NOT NULL,
    "adminId" INTEGER NOT NULL,
    CONSTRAINT "Colis_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "adminId" INTEGER NOT NULL,
    CONSTRAINT "Service_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");
