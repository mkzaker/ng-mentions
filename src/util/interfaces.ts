
export interface Tag { indices: {start: number, end: number}; }

export interface Line {
  originalContent: string;
  content: string;
  parts: Array<string|Mention>;
}

export interface Mention {
  contents: string;
  tag: Tag;
}
