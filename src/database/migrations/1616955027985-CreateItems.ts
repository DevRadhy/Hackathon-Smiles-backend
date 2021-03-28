import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateItems1616955027985 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'items',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          isUnique: true,
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'description',
          type: 'varchar'
        },
        {
          name: 'objective',
          type: 'decimal'
        },
        {
          name: 'item_id',
          type: 'integer'
        },
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('items');
  }

}
