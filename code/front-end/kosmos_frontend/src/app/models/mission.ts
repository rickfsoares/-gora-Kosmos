export class Mission {
  public id: number;
  public nome: string;
  public descricao: string;
  public xp: number;
  public created_at: string;
  public updated_at: string;
  public level_id: number;
        "quantidade_ativos": 2

  constructor(id: number, nome: string, descricao: string, xp: number, created_at: string, updated_at: string, level_id: number) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.xp = xp;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.level_id = level_id;
  }

}
