/*
  Warnings:

  - You are about to drop the column `instrucciones` on the `detalle` table. All the data in the column will be lost.
  - You are about to drop the `cambios_aplicados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ins` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `cambios_aplicados` DROP FOREIGN KEY `CAMBIOS_APLICADOS_id_ins_fkey`;

-- DropForeignKey
ALTER TABLE `cambios_aplicados` DROP FOREIGN KEY `CAMBIOS_APLICADOS_id_version_fkey`;

-- DropForeignKey
ALTER TABLE `detalle` DROP FOREIGN KEY `DETALLE_id_version_fkey`;

-- DropForeignKey
ALTER TABLE `ins` DROP FOREIGN KEY `INS_id_proveedor_fkey`;

-- AlterTable
ALTER TABLE `detalle` DROP COLUMN `instrucciones`,
    MODIFY `texto` TEXT NOT NULL,
    MODIFY `scripts` TEXT NOT NULL;

-- DropTable
DROP TABLE `cambios_aplicados`;

-- DropTable
DROP TABLE `ins`;

-- CreateTable
CREATE TABLE `Institucion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `fecha_contrato` DATETIME(3) NOT NULL,
    `id_proveedor` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CambiosAplicados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_act` DATETIME(3) NOT NULL,
    `observaciones` VARCHAR(191) NULL,
    `creado` DATETIME(3) NOT NULL,
    `actualizado` DATETIME(3) NOT NULL,
    `id_version` INTEGER NOT NULL,
    `id_ins` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Institucion` ADD CONSTRAINT `Institucion_id_proveedor_fkey` FOREIGN KEY (`id_proveedor`) REFERENCES `Proveedor`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CambiosAplicados` ADD CONSTRAINT `CambiosAplicados_id_version_fkey` FOREIGN KEY (`id_version`) REFERENCES `Versiones`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CambiosAplicados` ADD CONSTRAINT `CambiosAplicados_id_ins_fkey` FOREIGN KEY (`id_ins`) REFERENCES `Institucion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detalle` ADD CONSTRAINT `Detalle_id_version_fkey` FOREIGN KEY (`id_version`) REFERENCES `Versiones`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
