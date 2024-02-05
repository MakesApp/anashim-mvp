import learning from '@assets/icons/learning.svg';
import publicIcon from '@assets/icons/public.svg';
import employment from '@assets/icons/employment.svg';
import education from '@assets/icons/education.svg';
import project from '@assets/icons/project.svg';
import business from '@assets/icons/business.svg';
import social from '@assets/icons/social.svg';
import program from '@assets/icons/program.svg';
import platform from '@assets/icons/platform.svg';
import other from '@assets/icons/other.svg';

interface TagIcons {
  [key: string]: string;
}

export interface TagInfo {
  name: string;
  bgColor: string;
  closeColor: string;
  tagIcons: TagIcons;
}

export interface Tags {
  sector: TagInfo;
  type: TagInfo;
  fields: TagInfo;
}

const SECTOR_TAG_BG = 'var(--coral-blush)';
const FIELD_TAG_BG = 'var(--midnight-blue)';
const TYPE_TAG_BG = 'var(--plum-wine)';
const SECTOR_TAG_CLOSE = 'var(--coral-blush-light)';
const FIELD_TAG_CLOSE = 'var(--midnight-blue-light)';
const TYPE_TAG_CLOSE = 'var(--plum-wine-light)';
const sectorIcons: TagIcons = {
  ציבורי: publicIcon,
  חברתי: social,
  עסקי: business,
};
const fieldIcons: TagIcons = {
  למידה: learning,
  חינוך: education,
  תעסוקה: employment,
  אחר: other,
};
const typeIcons: TagIcons = {
  מיזם: project,
  תוכנית: program,
  פלטפורמה: platform,
  אחר: other,
};

export const tags: Tags = {
  sector: {
    name: 'מגזר',
    bgColor: SECTOR_TAG_BG,
    closeColor: SECTOR_TAG_CLOSE,
    tagIcons: { ...sectorIcons },
  },
  type: {
    name: 'סוג',
    bgColor: TYPE_TAG_BG,
    closeColor: TYPE_TAG_CLOSE,
    tagIcons: {
      ...typeIcons,
    },
  },
  fields: {
    name: 'תחום',
    bgColor: FIELD_TAG_BG,
    closeColor: FIELD_TAG_CLOSE,
    tagIcons: { ...fieldIcons },
  },
};
