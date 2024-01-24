import learning from '@assets/icons/learning.svg';
import publicIcon from '@assets/icons/public.svg';
import employment from '@assets/icons/employment.svg';
import education from '@assets/icons/education.svg';
import project from '@assets/icons/project.svg';
import business from '@assets/icons/business.svg';
import social from '@assets/icons/social.svg';
import program from '@assets/icons/program.svg';
import platform from '@assets/icons/platform.svg';

export const tagsObj = {
  ציבורי: {
    group: 'sector',
    name: 'public',
    bgColor: 'var(--coral-blush)',
    icon: publicIcon,
  },
  חברתי: {
    group: 'sector',
    name: 'social',
    bgColor: 'var(--coral-blush)',
    icon: social,
  },
  עסקי: {
    group: 'sector',
    name: 'business',
    bgColor: 'var(--coral-blush)',
    icon: business,
  },
  למידה: {
    group: 'field',
    name: 'learning',
    bgColor: 'var(--midnight-blue)',
    icon: learning,
  },
  חינוך: {
    group: 'field',
    name: 'education',
    bgColor: 'var(--midnight-blue)',
    icon: education,
  },
  תעסוקה: {
    group: 'field',
    name: 'employment',
    bgColor: 'var(--midnight-blue)',
    icon: employment,
  },
  מיזם: { group: 'type', name: 'project', bgColor: 'var(--plum-wine)', icon: project },
  תוכנית: { group: 'type', name: 'program', bgColor: 'var(--plum-wine)', icon: program },
  פלטפורמה: {
    group: 'type',
    name: 'platform',
    bgColor: 'var(--plum-wine)',
    icon: platform,
  },
};
