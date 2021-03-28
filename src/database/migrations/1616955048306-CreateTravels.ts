import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTravels1616955048306 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'travels',
      columns: [
        {
          name: 'id',
          type: 'integer',
          isUnique: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'from',
          type: 'varchar',
        },
        {
          name: 'to',
          type: 'varchar'
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
    await queryRunner.dropTable('travels');
  }

}
