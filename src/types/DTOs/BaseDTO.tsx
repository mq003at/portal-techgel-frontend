/**
 * Base Data Transfer Object (DTO) structure. Include id, mainId, createdAt, updatedAt.
 */
export interface BaseDTO {
  /**
   * Optional. Unique identifier (UUID or database-generated ID).
   */
  id: string;

  /**
   * Optional. Custom main ID (e.g., human-readable code or alternative ID).
   */
  mainId: string;

  /**
   * Optional. Timestamp indicating when the entity was created.
   * ISO 8601 string format (e.g., "2025-04-29T12:34:56Z").
   */
  createdAt: string;

  /**
   * Optional. Timestamp indicating when the entity was last updated.
   * ISO 8601 string format.
   */
  updatedAt: string;
}

export interface BaseReadDTO {
  id: string;
  mainId: string;
  createdAt: string;
  updatedAt: string;
}
