-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'PETUGAS', 'MEMBER') NOT NULL,
    `memberId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Student` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nis` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `kelas` VARCHAR(191) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Student_nis_key`(`nis`),
    UNIQUE INDEX `Student_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Walas` (
    `id_walas` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_walas` VARCHAR(191) NOT NULL,
    `no_tlpn` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_walas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Book` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `year` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `className` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Peminjaman` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_student` INTEGER NOT NULL,
    `id_book` INTEGER NOT NULL,
    `tgl_pinjaman` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `tgl_kembali` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pengembalian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_peminjaman` INTEGER NOT NULL,
    `tgl_kembali` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Pengembalian_id_peminjaman_key`(`id_peminjaman`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_memberId_fkey` FOREIGN KEY (`memberId`) REFERENCES `Member`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Peminjaman` ADD CONSTRAINT `Peminjaman_id_student_fkey` FOREIGN KEY (`id_student`) REFERENCES `Student`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Peminjaman` ADD CONSTRAINT `Peminjaman_id_book_fkey` FOREIGN KEY (`id_book`) REFERENCES `Book`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pengembalian` ADD CONSTRAINT `Pengembalian_id_peminjaman_fkey` FOREIGN KEY (`id_peminjaman`) REFERENCES `Peminjaman`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
