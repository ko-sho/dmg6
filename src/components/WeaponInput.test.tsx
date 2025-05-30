import { render, screen, fireEvent } from '@testing-library/react';
import WeaponInput from './WeaponInput';
import { Weapon } from '../models/Weapon';
import React from 'react';
import { vi } from 'vitest';

describe('WeaponInput UI', () => {
  const baseWeapon = new Weapon({
    weaponType: 'longsword',
    weaponMultiplier: 200,
    baseElementValue: 0,
    elementType: { key: 'none', label: '無属性' },
    criticalRate: 0,
  });

  it('武器種セレクト・武器倍率・属性値・属性・会心率の各UIが表示される', () => {
    const setWeapon = vi.fn();
    render(
      <WeaponInput weapon={baseWeapon} setWeapon={setWeapon} sharpnessColor={'white'} setSharpnessColor={() => {}} />
    );
    expect(screen.getByLabelText('武器種')).toBeInTheDocument();
    expect(screen.getByLabelText('武器倍率')).toBeInTheDocument();
    expect(screen.getByLabelText('属性値')).toBeInTheDocument();
    expect(screen.getByLabelText('属性')).toBeInTheDocument();
    expect(screen.getByLabelText('会心率')).toBeInTheDocument();
  });

  it('武器種を変更できる', () => {
    let weapon = new Weapon({
      weaponType: 'longsword',
      weaponMultiplier: 200,
      baseElementValue: 0,
      elementType: { key: 'none', label: '無属性' },
      criticalRate: 0,
    });
    const setWeapon = (w: React.SetStateAction<Weapon>) => {
      weapon = typeof w === 'function' ? w(weapon) : w;
    };
    render(
      <WeaponInput weapon={weapon} setWeapon={setWeapon} sharpnessColor={'white'} setSharpnessColor={() => {}} />
    );
    fireEvent.mouseDown(screen.getByLabelText('武器種'));
    fireEvent.click(screen.getByText('大剣'));
    expect(weapon.weaponType).toBe('greatsword');
  });

  it('武器倍率・属性値・会心率を入力できる', () => {
    let weapon = new Weapon({
      weaponType: 'longsword',
      weaponMultiplier: 200,
      baseElementValue: 0,
      elementType: { key: 'none', label: '無属性' },
      criticalRate: 0,
    });
    const setWeapon = (w: React.SetStateAction<Weapon>) => {
      weapon = typeof w === 'function' ? w(weapon) : w;
    };
    render(
      <WeaponInput weapon={weapon} setWeapon={setWeapon} sharpnessColor={'white'} setSharpnessColor={() => {}} />
    );
    fireEvent.change(screen.getByLabelText('武器倍率'), { target: { value: '250' } });
    expect(weapon.weaponMultiplier).toBe(250);
    fireEvent.change(screen.getByLabelText('属性値'), { target: { value: '123' } });
    expect(weapon.baseElementValue).toBe(123);
    fireEvent.change(screen.getByLabelText('会心率'), { target: { value: '15' } });
    expect(weapon.criticalRate).toBe(15);
  });

  it('属性セレクトでelementTypeが正しく更新される', () => {
    let weapon = new Weapon({
      weaponType: 'longsword',
      weaponMultiplier: 200,
      baseElementValue: 0,
      elementType: { key: 'none', label: '無属性' },
      criticalRate: 0,
    });
    const setWeapon = (w: React.SetStateAction<Weapon>) => {
      weapon = typeof w === 'function' ? w(weapon) : w;
    };
    render(
      <WeaponInput weapon={weapon} setWeapon={setWeapon} sharpnessColor={'white'} setSharpnessColor={() => {}} />
    );
    fireEvent.mouseDown(screen.getByLabelText('属性'));
    fireEvent.click(screen.getByText('火'));
    expect(weapon.elementType.key).toBe('fire');
    expect(weapon.elementType.label).toBe('火');
  });
});
