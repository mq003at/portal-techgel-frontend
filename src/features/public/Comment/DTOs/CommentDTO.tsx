import { BaseDTO } from '../../../../types/DTOs/BaseDTO';

export enum CommentLocation {
  WORKFLOW = 'WORKFLOW', // Free-form discussion
  SCHEDULE = 'SCHEDULE',
}

export type CommentLocationType = keyof typeof CommentLocation;

export interface CommentDTO extends Omit<BaseDTO, 'mainId'> {
  // Comment message
  message: string;

  // Author Information
  authorId: string;
  authorName: string;
  authorAvatar: string;

  // Recipient Information
  recipientId: string;
  recipientName: string;

  // Showing the user who and where they are commented
  locationType: CommentLocationType;
  locationId: string;
  locationName: string;

  // Mentioned users
  mentions: MentionDTO[];
}

export interface MentionDTO {
  id: string;
  name: string;
  index: number;
}
