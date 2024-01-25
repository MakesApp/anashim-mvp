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

interface TagInfo {
  bgColor: string;
  tagIcons: TagIcons;
}

interface Tags {
  sector: TagInfo;
  type: TagInfo;
  fields: TagInfo;
}

const SECTOR_TAG_BG = 'var(--coral-blush)';
const FIELD_TAG_BG = 'var(--midnight-blue)';
const TYPE_TAG_BG = 'var(--plum-wine)';
const sectorIcons: TagIcons = {
  ציבורי: publicIcon,
  חברתי: social,
  עסקי: business,
  אחר: other,
};
const fieldIcons: TagIcons = {
  למידה: learning,
  חינוך: education,
  תעסוקה: employment,
};
const typeIcons: TagIcons = {
  מיזם: project,
  תוכנית: program,
  פלטפורמה: platform,
  אחר: other,
};

export const tags: Tags = {
  sector: {
    bgColor: SECTOR_TAG_BG,
    tagIcons: { ...sectorIcons },
  },
  type: {
    bgColor: TYPE_TAG_BG,
    tagIcons: {
      ...typeIcons,
    },
  },
  fields: {
    bgColor: FIELD_TAG_BG,
    tagIcons: { ...fieldIcons },
  },
};
