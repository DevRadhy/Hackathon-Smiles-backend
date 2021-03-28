import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1616955064306 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'products',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isUnique: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'product',
          type: 'varchar',
        },
        {
          name: 'item_id',
          type: 'uuid'
        },
      ],
      foreignKeys: [
        {
          columnNames: [ 'item_id' ],
          referencedColumnNames: [ 'id' ],
          referencedTableName: 'items',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }

}
